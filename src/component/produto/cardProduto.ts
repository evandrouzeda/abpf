import Z, { Zeyo } from "zeyo"
import Component from ".."
import App from "../../app"
import { Adapter } from "../adapter/lib"
import style from "./produto.module.css"

export default class CardProduto extends Component {
    adapter: Adapter
    fields: { [key: string]: any }
    orientation: string
    constructor(app: App, adapter: Adapter, orientation: string) {
        super(app)
        this.orientation =  orientation
        this.adapter = adapter
        this.fields = {
            img: "",
            nome: "",
            preco: "",
            descricao: "",
            restaurante: "",
        }
    }
    main: Zeyo = Z("div")
    async create(obj: any): Promise<Zeyo> {
        this.adapter.mapfields.forEach(f => this.fields[f.component] = obj[f.object]);
        console.log(obj)
        return this.main = Z("div").class(style.produto, style[this.orientation]).children(
            Z("div").children(
                Z("img").set("src", this.fields.img),
                Z("div").class(style.text).children(
                    Z("h3").text(this.fields.nome),
                    Z("p").text(`R$ ${this.fields.preco}`),
                )
            ).click(() => console.log("clicou")),
            Z("p").class("d-flex", "gap-s", style.restaurante)
                .HTML(
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" style="fill: #cacaca;stroke: none;"></path><circle cx="12" cy="10" r="3" style="fill: white;stroke: none;"></circle></svg>`
                    + `${this.fields.restaurante.nome}`
                ),
        ).click(() => {
            console.log("clicou")
            this.adapter.action(obj)
        }).object(o => console.log(o.element.onclick))
    };
}