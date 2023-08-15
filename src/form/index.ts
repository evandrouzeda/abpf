import { Field, Fields } from "./field"
interface Controller {
    execute(form: Form): void
}

export default abstract class Form {
    title: string
    data: { [key: string]: any } = {}
    fields: Fields = {}
    footer: { back: string, next: string }
    controller: Controller
    model: any
    constructor(model: any, title: string = "", controller: Controller, footer: { back: string, next: string } = { back: "Voltar", next: "none" }) {
        this.model = model
        this.title = title
        this.controller = controller
        this.footer = footer
    }
    abstract getFields(o?: any): Promise<Fields>

    onSubmit(fields: any) {
        this.setFields(fields)
        this.controller.execute(this)
    }

    setFields(fields: any) {
        for (const key in fields)
            this.data[key] = fields[key].getValue()
        this.fields = fields
    }
}