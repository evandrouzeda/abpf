import { FormElementContructor } from "../_lib"

export default function SetValue<Base extends FormElementContructor>(base: Base) {
    return class extends base {
        setValue(value: any) {
            if(typeof value === "undefined") return
            const e: any = this.element.element
            e.value = value
        }
    }
}