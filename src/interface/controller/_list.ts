import CreateItem from "../../features/item/controllers/createItem";

export default class Controllers {
    static list: {[key: string]: any} = {
        "createitem": CreateItem,
    }
}