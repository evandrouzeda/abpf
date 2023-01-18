import App from "../../app.js";
import Forms from "../../core/form/_list.js";
import { Zeyo } from "../../zeyo/lib.js";
import Z from "../../zeyo/zeyo.js";
import Modal from "../modal/modal.js";
import Component from "../_component.js";
import Adapters from "./adapter/_list.js";

export default class CardSimple implements Component {
    adapter: string
    fields: {[key: string]: string}
    constructor(adapter: string){
        this.adapter = adapter
        this.fields = {
            title: "",
            description: "",
        }
    }
    main: Zeyo = Z("div")
    create(o: any): Zeyo {
        const adapter = Adapters.list[this.adapter]
        adapter.mapfield.forEach(f => this.fields[f.component] = o[f.object])
        return this.main = Z("div").class("card").children(
            Z("h3").text(this.fields.title),
            Z("p").text(this.fields.description)
            ).click(() => {
            Modal.show(new Forms.list[adapter.action](App.repository, o))
        })
    };
}