import { Zeyo } from "../../zeyo/lib.js"
import Z from "../../zeyo/zeyo.js"
import GetValue from "./properties/getValue.js"
import SetValue from "./properties/setValue.js"
import FormElement from "./_element.js"

export default class Select extends SetValue(GetValue(FormElement)) {
    list: {value: string, name: string}[] = []
    constructor(label: string, list: {value: string, name: string}[], placeholder?: string) {
        super("objecth", label, placeholder ? placeholder : "Selecione")
        this.list = list
    }
    create(): Zeyo {
        this.element = Z("select").children(
            Z("option").atribs({"value": "none", "selected": "", "disabled": ""}).text(this.placeholder),
            ...(this.list.map(i => Z("option").atrib("value", i.value).text(i.name)))
        )
        return Z("div").children(
            Z("label").text(this.label),
            this.element
        ).class("d-grid", "gap-p")
    }
}