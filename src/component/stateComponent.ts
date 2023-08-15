import Z, { Zeyo } from "zeyo";
import Component from ".";
import Navigation from "../navigation";

export default class StateComponent extends Component {
    async create(navigation: Navigation): Promise<Zeyo> {
        //console.log('Create do componente', navigation.state.name, navigation.state);
        //(navigation.state as any).setComponente()
        return this.main = await navigation.state.setComponente(this.app)
    }
}