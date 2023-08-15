import Z, { Zeyo } from "zeyo";
import Component from "../..";
import Navigation from "./navigation";
import App from "../../../app";

export default class Menu extends Component{
    main: Zeyo = Z("div");
    constructor(app: App) {
        super(app)
    }
    create(): Zeyo {
        return this.main = Z("div").children(
            new Navigation(this.app).watchSet(this.app.navigation).create(this.app.navigation),
            //new NavigationIcons(this.app).watchSet(this.navigation.state).create(this.navigation.state)
        )
    }
}