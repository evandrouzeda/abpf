import Z, { Zeyo } from "zeyo";
import Component from "..";
import App from "../../app";
import { Adapter } from "../adapter/lib";
import CardSimple from "../cardSimple";
import stylelista from "./lista.module.css"

export default class ListaHorizontal extends Component {
    main: Zeyo = Z("div");
    card: typeof CardSimple
    constructor(app: App, card: typeof CardSimple) {
        super(app)
        this.card = card
    }
    async create(obj: { adapter: Adapter, title: string, list: any[], orientation: any, more: (e: MouseEvent) => void }): Promise<Zeyo> {
        const list = obj.list.slice(0, 5)
        return this.main = Z("div").children(
            Z("div").class("d-flex", "jc-between", "pointer").children(
                Z("h2").attribute("style", "margin-bottom: .3em").text(obj.title),
                Z("i").HTML(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"/></svg>`)
            ).click(obj.more),
            Z("div").class(stylelista[obj.orientation]).children(
                ...(await Promise.all(list.map(async (e, i) => {
                    //e.orientation = obj.orientation
                    const [es, c] = new this.card(this.app, obj.adapter, obj.orientation).watch(e);
                    return await c.create(es)
                }))),
                Z("div").class("pointer", "d-flex", "a-center", "gap-s", stylelista.vermais).children(
                    Z("h3").text("Ver mais"),
                    Z("i").class("d-flex", "a-center")
                        .HTML(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"/></svg>`)
                ).click(obj.more)
            )
        )
    }
}