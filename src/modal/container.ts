import Z, { Zeyo, ZeyoAs } from "zeyo";
import modal from "./modal.module.css";
import App from "../app";

export default class ModalContainer {
    slot: Zeyo = Z("main")
    main: ZeyoAs<"div">;
    constructor(app: App) {
        this.main = Z("div").class(modal["modal-container"]).children(
            this.slot
        ).object(z => z.element.onclick = e => {
            if (e.target === z.element)
                app.hash.remove()
        })
    }
    inner(z: Zeyo){
        this.slot.element.parentElement?.replaceChild(z.element, this.slot.element);
        this.slot = z
        return this.main
    }
}