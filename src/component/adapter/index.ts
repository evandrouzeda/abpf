import { Action, Adapter as IAdapter, MapField } from "./lib";

interface AdapterTypes {
    "empty": []
    "full": [action: Action, mapfields: MapField[]]
    "action": [action: Action]
    "map": [mapfields: MapField[]]
}

export default class Adapter<T extends keyof AdapterTypes> implements IAdapter {
    mapfields: MapField[];
    action: Action
    constructor(type: T, ...args: AdapterTypes[T]) {
        switch (type) {
            case "full":
                const [fullaction, fullmapfields] = (args as AdapterTypes["full"]);
                this.action = fullaction;
                this.mapfields = fullmapfields;
                break;
            case "action":
                const [action] = (args as AdapterTypes["action"])
                this.action = action
                this.mapfields = []
                break;
            case "map":
                const [mapfields] = (args as AdapterTypes["map"])
                this.action = console.log
                this.mapfields = mapfields
                break;
            default:
                this.action = console.log
                this.mapfields = []
                break;
        }
    }
}