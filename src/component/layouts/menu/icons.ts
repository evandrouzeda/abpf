import Z, { Zeyo } from "zeyo";
import Component from "../..";
import style from "../layout.module.css"
import Nav from "../../../navigation";
export default class NavigationIcons extends Component {
    main: Zeyo = Z("nav");
    create(navigation: Nav): Zeyo {
        return this.main = Z("nav").children(
            /* ...navigation.state.icons.map((o) => {
                return Z("a").set("href", "path1").text(o.title).click((e) => {
                    e.preventDefault()
                    if(o.type === "state") navigation.state.next(o)
                    else navigation.state.route(o) 
                })
            }) */
        )
    }
}