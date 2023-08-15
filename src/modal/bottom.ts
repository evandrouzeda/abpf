import Form from "../form"
import Z from "zeyo"
import ComponentForm from "../form/components/_component"
import Component from "../component"
import modal from "./modal.module.css"
export default class Bottom extends Component {
    main = Z("div")
    async create(form: Form) {
        return this.main = Z("div").class(modal["modal-container"]).children(
            Z("div").class(modal.modal, "d-grid").children(
                await new ComponentForm().create(form)
            )
        ).object(z => z.element.onclick = e => {
            if (e.target === z.element)
                this.app.hash.remove()
        })
    }

    /* showing = false
    modal = new Bottom()
    async show(form?: Form) {
        if (form){
            window.location.hash = "modal"
            this.app.root.appendChild((await this.modal.create(form!)).element)
        } else{
            //window.history.replaceState("", document.title, window.location.pathname)
            //if(window.location.hash.length > 1) window.history.back()
            this.modal.main.element.remove()
        }
    } */
}