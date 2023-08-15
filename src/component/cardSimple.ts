import Z, { Zeyo } from "zeyo"
import Component from "."
import App from "../app"
import { Adapter } from "./adapter/lib"

export default class CardSimple extends Component {
    adapter: Adapter
    fields: { [key: string]: string }
    constructor(app: App, adapter: Adapter, orientation: string) {
        super(app)
        this.adapter = adapter
        this.fields = {
            title: "",
            description: "",
        }
    }
    main: Zeyo = Z("div")
    async create(obj: any): Promise<Zeyo> {
        this.adapter.mapfields.forEach(f => this.fields[f.component] = obj[f.object]) 
        return this.main = Z("div").class("pointer").children(
            Z("h3").text(this.fields.title),
            Z("p").text(this.fields.description)
        ).click(() => this.adapter.action(obj))
    };
}