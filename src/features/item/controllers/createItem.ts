import Form from "../../../form";
import Controller from "../../../interface/controller";

export default class CreateItem extends Controller {
    execute(form: Form): void {
        console.log(form);
        (form as any).lista.list.push(form.model)
    }
}