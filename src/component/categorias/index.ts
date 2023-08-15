import Z, { Zeyo } from "zeyo"
import Component from ".."
import App from "../../app"
import { Adapter as IAdapter } from "../adapter/lib"
import style from "./categorias.module.css"
import ListaHorizontal from "../lista/listaHorizontal"
import CardProduto from "../produto/cardProduto"
//import data from "./data"
import { Produto } from "../produto/lib"
import ListaVertical from "../lista/listaVertical"


export default class Categorias extends Component {
    adapter: IAdapter
    constructor(app: App, adapter: IAdapter) {
        super(app)
        this.adapter = adapter
    }
    main: Zeyo = Z("div")
    async create(adapter: IAdapter): Promise<Zeyo> {
        //const [data, err] = await this.app.repository.readMany("CategoriaItens", "0")
        const [data, err] = await this.app.repository.usecase<any[]>("getcategorias")
        console.log("\n\n\n===>", data)
        const categorias: string[] = ["Todos"].concat(data.map(d => d.nome))

        return this.main = Z("section").class("d-grid", style.container).children(
            Z("nav").class(style.categorias).children(
                ...(categorias.map(c =>
                    Z("a").class(style.categoria, c === "Todos" ? style.selected : "")
                        .attribute("data-slide", c)
                        .text(c)
                        .click(() => this.adapter.action(c))
                ))
            ).click(e => {
                const element = (e.target as HTMLElement)
                if (element.dataset.slide)
                    this.changeSlide(this.main.element, element.dataset.slide);
            }),
            Z("div").class(style.display, "d-grid").children(
                Z("div").attribute("data-slide", "Todos").class(style.all, style.slide, style.active, "o-auto", "d-grid").children(
                    ...(await Promise.all(data.map(async c => {
                        const [itens, horizontal] = new ListaHorizontal(this.app, CardProduto).watch({
                            adapter: adapter,
                            title: c.nome,
                            list: (c.itens as Produto[]),
                            orientation: "horizontal",
                            more: (e: MouseEvent) => {
                                const parentcategoria = (e.target as HTMLElement).parentElement?.parentElement?.parentElement?.parentElement?.parentElement
                                console.log(parentcategoria)
                                this.changeSlide(this.main.element, c.nome)
                            }
                        })
                        return await horizontal.create(itens)
                    }))),
                    Z("footer").class(style.dev, "d-flex", "jc-center").children(Z("p").children("developed by ", Z("a").set("href", "https://zeyo.org").set("target", "_blank").text("zeyo.org")))
                ),
                ...(await Promise.all(data.map(async c => {
                    const [itens, horizontal] = new ListaVertical(this.app, CardProduto).watch({
                        adapter: adapter,
                        title: c.nome,
                        list: (c.itens as Produto[]),
                        orientation: "vertical",
                        more: (e: MouseEvent) => {
                            console.log(e.target)
                        }
                    })
                    return (await horizontal.create(itens)).class(style.slide, "o-auto", "d-grid").attribute("data-slide", c.nome)
                })))
            ),
        )
    };

    changeSlide(parentCategoria: HTMLElement, target?: string): { active: HTMLElement, target: HTMLElement } {
        const nav = (parentCategoria.childNodes[0] as HTMLElement)
        const navNodes = (nav.childNodes as any);
        console.log(navNodes)
        for (const tab of (navNodes as HTMLElement[])) {
            if (tab.dataset.slide === target) {
                tab.classList.add(style.selected)
                nav.scrollTo({
                    top: 0,
                    left: tab.offsetLeft - 10,
                    behavior: "smooth",
                })
            } else if (tab.classList.contains(style.selected))
                tab.classList.remove(style.selected)
        }

        const display = (parentCategoria.childNodes[1].childNodes as any);
        const slides: { active: HTMLElement, target: HTMLElement } = {
            active: ({} as HTMLElement),
            target: ({} as HTMLElement)
        }
        for (const slide of (display as HTMLElement[])) {
            if (slide.dataset.slide === target)
                slides.target = slide
            else if (slide.classList.contains(style.active))
                slides.active = slide

            if (slides.target.tagName)
                slide.classList.remove(style.off)
            else slide.classList.add(style.off)
        }
        slides.active.classList.remove(style.active)
        slides.target.classList.add(style.active)
        return slides
    }
}