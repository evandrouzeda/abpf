
import { Options, StateBase, StateOptions } from "../../navigation/state"
import ComponenteGenerico from "../propriedades/componente"
import Childrens from "./childrens"
import ParametrosGenerico from "../propriedades/parametrosGenerico"

export default class Root extends ComponenteGenerico(ParametrosGenerico(Childrens(StateBase))){
    options: Options = {}
    static path = ""
    previous = undefined
    title = "Root"
    name = "root"
    icons: StateOptions = [{
        title: "Conta",
        type: "route",
        route: "/account",
        param: {}
    }]
    page?: any
    constructor(page?: any) {
        super()
        this.page = page
    }

    async setup() {
        
    }
}