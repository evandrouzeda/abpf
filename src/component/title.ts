import Z, { Zeyo } from "zeyo";
import Component from ".";
import Navigation from "../navigation";

export default class StateTitle extends Component {
    create(navigation: Navigation): Zeyo {
        return this.main = Z("h1").text(navigation.state.title)
    }
}