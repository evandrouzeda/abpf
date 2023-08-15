import Z, { Zeyo } from "zeyo";
import Component from "..";
import style from "./load.module.css"

export default class Load extends Component {
    create(): Zeyo {
        return Z("div").class("d-flex", "a-center", "jc-center").children(
            Z("div").class(style.load)
        )
    }
    
}