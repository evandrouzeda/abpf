import Z, { Zeyo } from "zeyo";
import Component from "..";
import App from "../../app";
//import CardPrecoSimple from "../../features/componente/cardprecosimples/ui";
//import ListaHorizontal from "../../features/componente/listahorizontal/ui";
import painel from "./painel.module.css"
type ConstructorComponent = new (app: App) => Component;
export default class Painel extends Component {
    main: Zeyo = Z("div");
    components: { [key: string]: ConstructorComponent } = {
        //"listahorizontal": ListaHorizontal,
        //"cardprecosimple": CardPrecoSimple,
        //"carddestaque": { name: "Card Destaque", form: FormSelectItem },
    }
    constructor(app: App) {
        super(app)
    }
    async create(components: any[]): Promise<Zeyo> {
        console.log(components)
        return this.main = Z("div").class(painel.container).children(
            ...(await Promise.all(components.map(async c => {
                if (Object.prototype.hasOwnProperty.call(this.components, c.tipo))
                    return await new this.components[c.tipo](this.app).create(c);
                return Z("h3").text(`${c.tipo} ainda nao implementado`).class(painel["column-full"]);
            }))),
        )
    }
}