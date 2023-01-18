interface Adapter {
    action: string
    mapfield: Array<{component: string, object: string}>
}
export default class Adapters {
    static list: { [key: string]: Adapter } = {
        "estacionamento": {
            action: "updateestacionamento",
            mapfield: [
                { component: "title", object: "nome" },
                { component: "description", object: "vagas" }
            ]
        },
        "page": {
            action: "updatepage",
            mapfield: [
                { component: "title", object: "name" },
                { component: "description", object: "id" }
            ]
        },
        "template": {
            action: "updatetemplate",
            mapfield: [
                { component: "title", object: "name" },
                { component: "description", object: "post" }
            ]
        }
    }
}