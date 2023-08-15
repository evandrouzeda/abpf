import Form from "../form";
import Controller from "../interface/controller";

export default class Update extends Controller {
    async execute(form: Form): Promise<void> {
        console.log(form)
        /* const componente = {
            titulo: form.model.item.titulo,
            tipo: form.model.template.tipo,
            estabelecimento: this.app.session.estabelecimento._id,
            item: form.model.item._id,
            adapter: form.data
        }
        console.log(componente)
        const [result, err] = await this.app.repository.create("Componentes", componente);
        console.log(result, err);
        if (!err)
            (form as any).lista.list.push(result) */
        this.app.hash.remove()
    }
}