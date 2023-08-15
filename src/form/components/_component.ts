import Controllers from "../../interface/controller/_list"
import Z, { Zeyo } from "zeyo"
import Modal from "../../modal"
import FormElement from "./_element"
import { Fields } from "../field"
import Form from ".."

export default class ComponentForm {
    main: Zeyo = Z("form")
    properties: { [key: string]: FormElement<keyof HTMLElementTagNameMap> } = {}
    fields: Fields = {}
    async create(form: Form) {
        this.properties = {}
        this.fields = await form.getFields()
        console.log(this.fields)
        return this.main = Z("form").class("d-grid", "gap-m", "ac-between").children(
            Z("div").class("d-grid", "gap-m","o-auto").children(
                Z("h2").object(e => e.element.innerText = form.title),
                ...Object.keys(this.fields).map(k => {
                    //console.log(this.fields[k])
                    const z = this.fields[k].create(k)
                    this.fields[k].setValue(form.model[k])
                    this.fields[k].element.element.id = k
                    return z
                })
            ),
            Z("div").class("footer").children(
                ...((): Zeyo[] => {
                    const footer: Zeyo[] = []
                    if (form.footer.back !== "none")
                        footer.push(Z("button").text(form.footer.back).click(() => {
                            console.log("aqui tem que voltar no modal");
                            Modal.back()
                        }).class("aux").attribute("type", "button"))

                    if (form.footer.next !== "none")
                        footer.push(Z("button").text(form.footer.next))
                    return footer
                })()
            )
        ).object(z => z.element.onsubmit = e => {
            e.preventDefault()
            form.onSubmit(this.fields)
        })

    }
}