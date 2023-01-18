import { Zeyo } from "../../zeyo/lib.js"
import Z from "../../zeyo/zeyo.js"
import FormElement from "./_element.js"

export default class DateTime extends FormElement {
    constructor(label: string, placeholder: string) {
        super("text", label, placeholder)
    }
    create(): Zeyo {
        this.element = Z("input").atrib("type", this.type).atrib("placeholder", this.placeholder)
        return Z("div").class("d-grid", "gap-p").children(
            Z("label").object(e => e.element.innerText = this.label),
            this.element,
        )
    }

    getValue() {
        const e: any = this.element.element
        return new Date(e.value)
    }

    setValue(value: Date) {
        const e: any = this.element.element
        const str: string = typeof value === "string" ? value: value.toISOString()
        const d = new Date(str)
        e.value = `${d.toLocaleDateString().split("/").reverse().join("-")} ${d.toLocaleTimeString().replace(/[A-Z ]/g,"")}`
    }
}