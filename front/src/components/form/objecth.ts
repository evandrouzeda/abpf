import { Zeyo } from "../../zeyo/lib.js"
import Z from "../../zeyo/zeyo.js"
import Action from "./properties/action.js"
import GetValue from "./properties/getValue.js"
import SetValue from "./properties/setValue.js"
import FormElement from "./_element.js"

export default class ObjectH extends Action(SetValue(GetValue(FormElement))) {
    list: any[] = []
    constructor(label: string, list: any[], action?: any) {
        super("objecth", label, "")
        this.list = list
        if(action) this.action = action
    }
    create(): Zeyo {
        return this.element = Z("div").children(
            Z("label").text(this.label),
            Z("div").children(
                ...(this.list.map(i => typeof i === "string"? Z("p").text(i) : Z("div").class(i.main ? "mainadapter" : "normaladapter").text(i.name||i.modelo).click(e => this.action(i))))
            ).class("object-list", "d-flex", "gap-m", "max-h-80", "of-auto")
        ).class("d-grid", "gap-p")
    }
}