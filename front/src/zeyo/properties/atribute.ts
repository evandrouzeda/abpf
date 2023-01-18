import { Atributes, ZeyoConstructor } from "../lib"

export default function Atribute<Base extends ZeyoConstructor>(base: Base) {
    return class extends base {
        atribs(atribs: { [key: string]: string }) {
            for (const key in atribs) {
                this.element.setAttribute(key, atribs[key])
            }
            return this
        }
        atrib<K extends keyof Atributes>(key: K, value: string) {
            this.element.setAttribute(key, value)
            return this
        }
    }
}