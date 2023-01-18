import App from "../app.js"
import Z from "../zeyo/zeyo.js"

export default class Build {
    static async build(path: string) {
        App.root.innerHTML = ""
        const params: { [key: string]: string } = {}
        const page = App.pages.find(p => {
            if (p.route === path) return true
            else {
                const route = p.route.split("/")
                const pathname = path.split("/")
                if (route.length !== pathname.length) return false
                for (const i in route) {
                    if (route[i] !== pathname[i] && route[i][0] !== ":")
                        return false
                    else if (route[i][0] === ":") params[route[i].substring(1)] = pathname[i]
                }
                return true
            }
        })

        if (page)
            App.root.appendChild((await page!.create()).element)
        else App.root.appendChild((await {
            route: "/404",
            async create() {
                return Z("h1").object(e => {
                    e.element.innerText = "Pagina nao encontrada"
                })
            }
        }.create()).element)

    }
}