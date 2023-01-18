import { Zeyo } from "../../zeyo/lib.js"
import Z from "../../zeyo/zeyo.js"

export default class FormElement{
    label = ""
    placeholder = ""
    element: Zeyo
    type: string
    constructor(type: string, label: string, placeholder: string) {
        this.type = type
        this.label = label
        this.placeholder = placeholder
        this.element = Z("input")
    }
}