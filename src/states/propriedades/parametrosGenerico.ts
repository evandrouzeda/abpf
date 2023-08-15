import { StateBaseConstructor } from "../../navigation/state";

export default function ParametrosGenerico<Base extends StateBaseConstructor>(base: Base) {
    return class extends base {
        parametros: { [key: string]: string } = {}
        setParametros(route: string[]) {
            console.log(route)
            return route
        }
    }
}