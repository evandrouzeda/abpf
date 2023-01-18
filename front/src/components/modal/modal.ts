import App from "../../app.js";
import Form from "../../core/entity/form.js";
import { Zeyo } from "../../zeyo/lib.js";
import Component from "../_component.js";
import Bottom from "./bottom.js";

interface Node {
    form: Form
    pre?: Node
}
export default class Modal {
    static element: Zeyo
    static modal: Component = new Bottom()
    static node: Node
    static async show(form: Form){
        App.route.hash.push("modal")
        this.node = {form}
        this.element = await this.modal.create(form)
        App.root.appendChild(this.element.element)

        App.route.hash.cb = () => {
            this.modal.main.element.remove()
        }
    }

    static async change(form: Form, node: Node){
        const novo = await this.modal.create(form)
        this.element.element.parentElement?.replaceChild(novo.element, this.element.element)
        this.element = novo
        this.node = node
    }

    static async push(form: Form){
        await this.change(form, {form, pre: this.node})
    }

    static async back(){
        if(this.node.pre)
            await this.change(this.node.pre.form, this.node.pre)
    }
}