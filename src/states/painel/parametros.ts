import { StateBaseConstructor } from "../../navigation/state";

export default function ParametrosRestaurante<Base extends StateBaseConstructor>(base: Base) {
    return class extends base {
        parametros: { [key: string]: string } = {}
        setParametros(route: string[]) {
            return route
        }
    }
}