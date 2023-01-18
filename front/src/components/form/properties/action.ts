import { Zeyo } from "../../../zeyo/lib.js";
import Modal from "../../modal/modal.js";
import { FormElementContructor } from "../_lib.js";
export default function Action<Base extends FormElementContructor>(base: Base) {
    return class extends base {
        action(o: any) {
            Modal.push(o);
        }
    }
}