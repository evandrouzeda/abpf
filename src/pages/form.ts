import App from "../app";
import Form from "../form";
import { Field, Fields } from "../form/field";
import Update from "./controller";


export default class FormUpdate extends Form{
    app: App
    constructor(app: App, model: any) {
        super(model, model.titulo, new Update(app), {back: "none", next: "none"});
        this.app = app;
    }
    async getFields(): Promise<Fields> {
        const lista: any[] = []
        return {
            "titulo": Field.make("show", "Titulo"),
            "sub": Field.make("objecth", "Componente dos itens", lista)
        }
    }
}