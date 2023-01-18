import { Zeyo } from "../../zeyo/lib.js"
import Z from "../../zeyo/zeyo.js"
import GetValue from "./properties/getValue.js"
import SetValue from "./properties/setValue.js"
import FormElement from "./_element.js"
import {Fields} from "./_list.js"

export default class Password extends SetValue(GetValue(FormElement)) {
    extra: string[] = []
    constructor(label: string, placeholder: string) {
        super("password", label, placeholder)
    }
    create(): Zeyo {
        this.element.atrib("type", this.type).atrib("placeholder", this.placeholder)
        return Z("div").class("d-grid", "gap-p").children(
            Z("label").object(e => e.element.innerText = this.label),
            this.element,
            //TODO: tem que criar um campo extra para criar mais opcoes no campo
            ...this.extra.map(k =>{ return new Fields.list[k]().create() })
        )
    }
}