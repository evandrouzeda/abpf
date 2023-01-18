import Style from "../../style/style.js"
import { Zeyo, ZeyoStyle } from "../../zeyo/lib.js"
import Z from "../../zeyo/zeyo.js"
import GetValue from "./properties/getValue.js"
import SetValue from "./properties/setValue.js"
import FormElement from "./_element.js"

export default class Checkbox extends SetValue(GetValue(FormElement)) {
    main: Zeyo = Z("div")
    list: any[] = []
    /**
     * TEM QUE REFAZER ALGUNS DETALHES, PRINCIPALMENTE DA LISTA
     * @param label 
     * @param placeholder 
     * @param list 
     */
    constructor(label: string, placeholder: string, list: any[]) {
        super("text", label, placeholder)
    }
    create(key: string): Zeyo {
        this.style()
        console.log(this)
        this.element = Z("input").atribs({
            "id": key,
            "type": this.type
        }).atrib("placeholder", this.placeholder).click(() => {
            const value = this.getValue()
            const all = this.list[0]
            value ?
                this.main.element.classList.add("checked") :
                this.main.element.classList.remove("checked")
            if (this.placeholder === "all") {
                for (const key in all) {
                    if (key === "all") continue
                    all[key].element.element.checked = this.getValue()
                    this.getValue() ?
                        all[key].main.element.classList.add("checked") :
                        all[key].main.element.classList.remove("checked")
                }
            } else {
                const arr: boolean[] = []
                for (const key in all) {
                    if(key === "all") continue
                    arr.push(all[key].element.element.checked)
                }
                if (!arr.find(b => !b)) {
                    all["all"].element.element.checked = false
                    all["all"].main.element.classList.remove("checked")
                }
            }
        })
        this.list[0][this.placeholder] = this
        return this.main = Z("label").class("d-flex", "gap-p", "cb-container").children(
            Z("label").class("checkbox").children(
                this.element,
                Z("span").class("checkmark")
            ),
            Z("label").text(this.label).atribs({ "for": key }),
        )
    }

    getValue() {
        return (this.element.element as HTMLInputElement).checked
    }

    style() {
        Style.create("cb-container", {
            padding: "10px 1em",
            gap: "1em",
            borderRadius: ".5em",
            border: "solid #351b8a"
        })
        Style.create("cb-container.checked", {
            backgroundColor: "#351b8a",
        })
        Style.create("checkbox", {
            position: "relative"
        })
        Style.create("checkbox input", {
            opacity: "0"
        })
        Style.create("checkmark:after", {
            content: `""`,
            position: "absolute",
            display: "none",
            top: "0",
            width: "50%",
            height: "60%",
            border: "solid white",
            borderWidth: "0 3px 3px 0",
            transform: "rotate(45deg)",
        })
        Style.create("cb-container.checked .checkmark:after", {
            display: "block"
        })
    }
}