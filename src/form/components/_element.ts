import Z, { ZeyoAs } from "zeyo"

export default class FormElement<T extends keyof HTMLElementTagNameMap>{
    label = ""
    placeholder = ""
    element: ZeyoAs<T>
    type: string
    constructor(type: T, label: string, placeholder: string) {
        this.type = type
        this.label = label
        this.placeholder = placeholder
        this.element = Z(type)
    }
}