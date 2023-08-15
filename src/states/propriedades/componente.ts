import Z, { Zeyo } from "zeyo";
import App from "../../app";
import { StateBaseConstructor } from "../../navigation/state";

export default function ComponenteGenerico<Base extends StateBaseConstructor>(base: Base) {
    return class extends base {
        async setComponente(app: App): Promise<Zeyo> {
            return Z("div").class("generico")
        }
    }
}