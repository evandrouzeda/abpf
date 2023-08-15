import App from "../app";
import Form from "../form/";
import { Zeyo } from "zeyo";
import Component from "../component";
import Bottom from "./bottom";

interface Node {
    form: Form
    pre?: Node
}

interface ModalType {
    "form": [object: Form, component: Bottom];
    "component": [object: any, component: Component]
}
export default class Modal {
    static element: Zeyo
    static modal: Component
    static node: Node
    static async show<T extends keyof ModalType>(app: App, type: T,  ...args: ModalType[T]){
        const [obj, component] = args
        this.modal = component
        app.hash.on = true
        app.hash.push("modal")
        this.node = {form: obj}
        this.element = await this.modal.create(obj)
        app.root.appendChild(this.element.element)

        app.hash.cb = () => {
            this.modal.main.element.remove()
        }
    }

    static async showWithBack<T extends keyof ModalType>(app: App, type: T,  ...args: ModalType[T]){
        const [obj, component] = args
        this.modal = component
        app.hash.on = true
        app.hash.back = true
        this.node = {form: obj}
        this.element = await this.modal.create(obj)
        app.root.appendChild(this.element.element)

        app.hash.cb = () => {
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