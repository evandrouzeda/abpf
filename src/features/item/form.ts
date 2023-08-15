import App from "../../app";
import Form from "../../form";
import { Field, Fields } from "../../form/field";
import CreateItem from "./controllers/createItem";

export default class FormItem extends Form {
    model: any;
    lista: any
    constructor(app: App, model: any, lista: any) {
        super(model, "Criar Página", new CreateItem(app), {back: "none", next: "Criar"})
        this.model = model
        this.lista = lista
    }
    async getFields(): Promise<Fields> {
        return {
            "title": Field.make("text", "Título", "Estou super empolgado"),
            "description": Field.make("text", "Descricão", "Para aprender muito mais sobre o encrivel framework da Zeyo"),
        }
    }
}