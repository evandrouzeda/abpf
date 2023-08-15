import { Childrens, Options, StateBaseConstructor } from "../../navigation/state";
import Painel from "../painel";
import Restaurante from "../restaurante";

export default function Childrens<Base extends StateBaseConstructor>(base: Base) {
    return class extends base {
        childrens: Childrens = {
            "painel": Painel,
            "*": Restaurante,
        }
        options: Options = {}
    }
}