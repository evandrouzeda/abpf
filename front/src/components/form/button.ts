import { Field } from "../../core/entity/field.js"
import { Zeyo } from "../../zeyo/lib.js"
import Z from "../../zeyo/zeyo.js"
import Action from "./properties/action.js"
import GetValue from "./properties/getValue.js"
import SetValue from "./properties/setValue.js"
import FormElement from "./_element.js"
import { ActionFunction } from "./_list.js"

export default class Button extends Action(SetValue(GetValue(FormElement))) {
    constructor(label: string, action?: ActionFunction) {
        super("text", label, "")
    }
    create(): Zeyo {
        return this.element = Z("button").click(() => {
            this.action([])
        }).atrib("type", this.type).text(this.label)
    }
}