import { ZeyoConstructor } from "../lib";

export default function Children<Base extends ZeyoConstructor>(base: Base) {
    return class extends base {
        children(...child: Array<typeof this | string>){
            child.forEach(c => {
                if (typeof c === "string")
                    this.element.innerHTML += c
                else
                    this.element.appendChild(c.element)
            });
            return this
        }
    }
}