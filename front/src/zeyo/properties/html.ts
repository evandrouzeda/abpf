import { ZeyoConstructor } from "../lib"

export default function HTML<Base extends ZeyoConstructor>(base: Base) {
    return class extends base {
        HTML(t: string) {
            this.element.innerHTML = t
            return this
        }
    }
}