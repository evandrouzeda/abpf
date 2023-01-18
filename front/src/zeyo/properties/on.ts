import { ZeyoConstructor } from "../lib"
interface EventMap {
    "click": ""
    "mouseup": ""
}
export default function On<Base extends ZeyoConstructor>(base: Base) {
    return class extends base {
        on<K extends keyof HTMLElementEventMap>(event: K, cb: (this: HTMLAnchorElement, ev: HTMLElementEventMap[K]) => void) {
            if (Object.prototype.hasOwnProperty.call(this.element, `on${event}`))
                (this.element as any)[`on${event}`] = cb
            else console.error(`Event: on${event} doesn't exist in ${this.element}`)
            return this
        }
    }
}