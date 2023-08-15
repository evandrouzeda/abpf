import Z, { Zeyo } from "zeyo";
import Page from "../../pages";
import CardProduto from "../../component/produto/cardProduto";
import ListaVertical from "../../component/lista/listaVertical";
import { Produto } from "../../component/produto/lib";
import Adapter from "../../component/adapter";
import Modal from "../../modal";
import ModalProduto from "../../component/produto/modalProduto";
import style from "./style.module.css"

export default class RestaurantePage extends Page {
    route: string = "/"
    title?: string | undefined;
    children?: Node[] | undefined;
    auth?: string | undefined;
    params?: { [key: string]: string; } | undefined;
    main: Zeyo = Z("div");
    async create(obj?: any): Promise<Zeyo> {
        /* Aqui vai ter que pegar o restaurante e montar a lista vertical do seus itens  */
        const adapter = new Adapter("full",
            (obj) => {
                console.log("abrindo modal")
                Modal.show(this.app, "component", obj, new ModalProduto(this.app))
            },
            [
                { component: "img", object: "img" },
                { component: "nome", object: "nome" },
                { component: "preco", object: "preco" },
                { component: "descricao", object: "descricao" },
                { component: "restaurante", object: "restaurante" }
            ])
        const [itens, vertical] = new ListaVertical(this.app, CardProduto).watch({
            adapter: adapter,
            title: "Pratos",
            list: ([] as Produto[]),
            orientation: "vertical",
            more: (e: MouseEvent) => {
                console.log(e.target)
            }
        });
        const title = Z("h1").text(this.app.navigation.state.title);
        const img = Z("img").class(style.logo)
        /* (async () => {
            const [result, err] = await this.app.repository.usecase<any>("getrestaurante", { url: this.app.navigation.state.title })
            console.log(result, err)
            if (err || !result)
                return title.text(`Restaurante ${this.app.navigation.state.title} não encontrado`);

            title.text(result.nome)
            itens.list = result.itens
        })(); */
        return this.main = Z("main").attribute("style", "background-color: #f0f0f0; height: 100vh; height: 100svh; display: grid; grid-template-rows: 12% 88%;").children(
            Z("div").class("d-flex", "a-center", "gap-g").attribute("style", "padding-left: .5em;").children(
                Z("i").class("d-flex", "a-center", "pointer", "p-l", "h-100").click(() => this.app.navigation.back()).HTML(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left" style="width: 30px;"><polyline points="15 18 9 12 15 6"></polyline></svg>`),
                img,
                title,
            ),
            (await vertical.create(itens)).object(async o => {
                const [result, err] = await this.app.repository.usecase<any>("getrestaurante", { url: this.app.navigation.state.title })
                console.log(result, err)
                if (err || !result)
                    return title.text(`Restaurante ${this.app.navigation.state.title} não encontrado`);

                img.set("src", result.img)
                title.text(result.nome)
                vertical.pushList(result.itens, (o.element.childNodes[1] as HTMLElement), itens)
            }).class("o-auto", "p-m")
        )
    }
}
