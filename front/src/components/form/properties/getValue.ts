import { FormElementContructor } from "../_lib"

export default function GetValue<Base extends FormElementContructor>(base: Base) {
    return class extends base {
        getValue() {
            const e: any = this.element.element
            return e.value
        }
    }
}