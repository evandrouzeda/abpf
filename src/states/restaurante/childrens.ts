import { Childrens, Options, StateBaseConstructor } from "../../navigation/state";
import Item from "../item";

export default function Childrens<Base extends StateBaseConstructor>(base: Base) {
    return class extends base {
        childrens: Childrens = {
            "*": Item
        }
        options: Options = {}
    }
}