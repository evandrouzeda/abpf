import { ZeyoConstructor } from "../lib"

export default function Click<Base extends ZeyoConstructor>(base: Base) {
    return class extends base {
        click(cb: (e: MouseEvent) => void) {
            this.element.onclick = cb
            return this
        }
    }
}