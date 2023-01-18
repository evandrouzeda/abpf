import { Zeyo } from "../../zeyo/lib.js"
import Z from "../../zeyo/zeyo.js"
import FormElement from "./_element.js"

export default class Option extends FormElement {
    options: {key: string; value: string}[] = []
    elements: Zeyo[] = []
    constructor(label: string, placeholder: string) {
        super("option", label, placeholder)
    }
    create(): Zeyo {
        this.element = Z("div")
        return Z("div").class("d-grid", "gap-p").children(
            Z("label").object(e => e.element.innerText = this.label),
            this.element,
        )
    }

    getValue() {
        return this.options.map((o, i) => {
            const e: any = this.elements[i].element
            o.value = e.value
            return o
        })
    }

    setValue(value: any[]) {
        this.options = value
        if(this.options)
        this.element.children(
            ...(this.options.map((o, i)=> {
                const input = Z("input").atrib("value", o.value)
                this.elements.push(input)
                return Z("div").children(
                    Z("label").text(o.key),
                    input
                ).class("d-grid", "gap-s")
            }))
        ).class("d-grid", "gap-m", "pl-1")
    }
}