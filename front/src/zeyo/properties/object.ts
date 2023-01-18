import { ZeyoConstructor } from "../lib"

export default function Object<Base extends ZeyoConstructor>(base: Base) {
    return class extends base {
        object(cb: (z: this) => void){
            cb(this)
            return this
        }
    }
}