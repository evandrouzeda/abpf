import App from "../../app"
import { StateBase, StateOptions } from "../../navigation/state"
import ComponenteGenerico from "../propriedades/componente"
import Childrens from "./childrens"
import RestaurantePage from "./page"
import ParametrosRestaurante from "./parametros"

export default class Restaurante extends ComponenteGenerico(ParametrosRestaurante(Childrens(StateBase))) {
    static path = "*"
    title = "Restaurante"
    name = Restaurante.path
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
        console.log(this.parametros)
        this.name = this.parametros.restaurante ? this.parametros.restaurante : this.name
        this.title = this.name.toUpperCase();
        delete this.parametros.restaurante
        //aqui tem que pegar o restaurante seguindo o name
    }
}