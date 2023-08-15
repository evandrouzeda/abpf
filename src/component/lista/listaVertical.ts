import Z, { Zeyo } from "zeyo";
import Component from "..";
import App from "../../app";
import { Adapter } from "../adapter/lib";
import CardSimple from "../cardSimple";
import stylelista from "./lista.module.css"
import data from "../categorias/data";
type Obj = { adapter: Adapter, title: string, list: any[], orientation: any, more: (e: MouseEvent) => void }
export default class ListaVertical extends Component {
    main: Zeyo = Z("div");
    card: typeof CardSimple
    last: string = "0"
    categoria = ""
    end = false
    more = Z("div")
    constructor(app: App, card: typeof CardSimple) {
        super(app)
        this.card = card
    }
    async create(obj: { adapter: Adapter, title: string, list: any[], orientation: any, more: (e: MouseEvent) => void }): Promise<Zeyo> {
        this.more = Z("div").class("pointer", "d-flex", "a-center", "gap-s", stylelista.vermais).children(
            Z("h3").text("Carregar mais"),
            Z("i").class("d-flex", "a-center")
                .HTML(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"/></svg>`)
        ).object(o => o.click(async () => {
            await this.getMore((o.element.parentElement as HTMLElement), obj)
            o.element.parentElement?.appendChild(o.element)
        }));
        return this.main = Z("div").children(
            Z("div").class("d-flex", "jc-between").children(
                Z("h2").attribute("style", "margin-bottom: .3em").text(obj.title)
            ),
            Z("div").class(stylelista[obj.orientation]).children(
                ...(await Promise.all(obj.list.map(async e => {
                    this.last = e.c_id
                    this.categoria = e.categoria
                    console.log("last =>", this.last, typeof e._id)
                    const [es, c] = new this.card(this.app, obj.adapter, obj.orientation).watch(e);
                    return (await c.create(es))
                }))),
            ).object(o => {
                if(obj.list.length === 10)
                    o.children(this.more)
                o.element.onscroll = async (e) => {
                    if (o.element.scrollHeight - o.element.offsetHeight === o.element.scrollTop && !this.end) {
                        console.log("chegou no fim", o.element)
                        //aqui vai ter que colocar um elemento de load
                        this.getMore(o.element, obj)
                    }
                }
            })
        )
    }

    async getMore(element: HTMLElement, obj: Obj) {
        const [result, err] = await this.app.repository.usecase<any[]>("getmoreitenscategoria", { categoria: this.categoria, last: this.last })
        //aqui vai ter que TIRAR o elemento de load
        console.log(result, err);
        if (result.length < 10) this.end = true
        console.log(result)
        result.forEach(i => i.restaurante = JSON.parse(i.restaurante))
        this.pushList(result, element, obj);

        if (this.end) this.more.element.remove()
        else element.appendChild(this.more.element)
    }

    async pushList(list: any[], element: HTMLElement, obj: Obj) {
        list.forEach(async d => {
            this.last = d.c_id
            const [ds, c] = new this.card(this.app, obj.adapter, obj.orientation).watch(d);
            element.appendChild((await c.create(ds)).element)
        })
    }
}