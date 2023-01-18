import { ZeyoConstructor } from "../lib"

export default function AddClass<Base extends ZeyoConstructor>(base: Base) {
    return class extends base {
        class(...tokens: string[]) {
            this.element.classList.add(...tokens)
            return this
        }
    }
}