import { ZeyoConstructor } from "../lib"

export default function Text<Base extends ZeyoConstructor>(base: Base) {
    return class extends base {
        text(t: string) {
            this.element.innerText = t
            return this
        }
    }
}