import { Zeyo } from "../../zeyo/lib.js"
import Z from "../../zeyo/zeyo.js"
import Action from "./properties/action.js"
import GetValue from "./properties/getValue.js"
import SetValue from "./properties/setValue.js"
import FormElement from "./_element.js"
import { ActionFunction } from "./_list.js"

export default class ObjectV extends Action(SetValue(GetValue(FormElement))) {
    list: any[] = []
    constructor(label: string, list: any[], action?: ActionFunction) {
        super("text", label, "")
        this.list = list
        if(action) this.action = action
    }
    create(): Zeyo {
        return this.element = Z("div").children(
            ...(this.list.map(i => Z("div").text(i.name||i.modelo).click(e => this.action(i))))
        ).class("object-list", "d-grid", "gap-m", "max-h-80", "of-auto")
    }
}