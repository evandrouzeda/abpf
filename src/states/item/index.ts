import App from "../../app"
import ModalProduto from "../../component/produto/modalProduto"
import Modal from "../../modal"
import { StateBase, StateOptions } from "../../navigation/state"
import Root from "../../pages/root"
import ComponenteGenerico from "../propriedades/componente"
import Childrens from "./childrens"
import ParametrosRestaurante from "./parametros"

export default class Item extends ComponenteGenerico(ParametrosRestaurante(Childrens(StateBase))) {
    static path = "*"
    title = "Restaurante"
    name = Item.path
    icons: StateOptions = []
    previous = undefined
    app: App
    constructor(app: App) {
        super()
        this.app = app
    }

    async setup() {
        console.log(this.parametros)
        this.name = this.parametros.restaurante
        delete this.parametros.restaurante
        const [result, err] = await this.app.repository.read("Itens", {url: this.name})
        console.log(result, err)
        Modal.showWithBack(this.app, "component", result, new ModalProduto(this.app))
        //aqui tem que pegar o restaurante seguindo o name
    }
}