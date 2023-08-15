import App from "../../app"
import { StateBase, StateOptions } from "../../navigation/state"
import ComponenteGenerico from "../propriedades/componente"
import Childrens from "./childrens"
import RestaurantePage from "./page"
import ParametrosRestaurante from "./parametros"

export default class Painel extends ComponenteGenerico(ParametrosRestaurante(Childrens(StateBase))) {
    static path = "painel"
    title = "Painel"
    name = Painel.path
    icons: StateOptions = []
    previous = undefined
    page
    app: App
    constructor(app: App) {
        super()
        this.app = app
        this.page = RestaurantePage
    }

    async setup() {
        console.log("Entrou no painel")
        //aqui tem que pegar o restaurante seguindo o name
    }
}