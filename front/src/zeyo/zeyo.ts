import AddClass from "./properties/addClass.js"
import Atribute from "./properties/atribute.js"
import Children from "./properties/children.js"
import Click from "./properties/click.js"
import HTML from "./properties/html.js"
import Object from "./properties/object.js"
import On from "./properties/on.js"
import Text from "./properties/text.js"
import Root from "./properties/_root.js"


class Zeyo extends Text(Click(AddClass(Atribute(Children(Object(On(HTML(Root)))))))) {//quando adicionar um metodo aqui, tem que adicionar no lib.ts tbm
    constructor(tagName: keyof HTMLElementTagNameMap) {
        super(tagName)
    }
}

export default function Z(tagName: keyof HTMLElementTagNameMap) {
    return new Zeyo(tagName)
}