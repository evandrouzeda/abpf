import App from "../app"
import Hash from "../router/hash/_hash"
import { Option, State, StateConstructor } from "./state"

export default class Navigation extends Hash {
    state: State
    replaceRoot
    constructor(state: State, replaceRoot?: boolean) {
        super()
        this.state = state
        this.replaceRoot = replaceRoot ? true : false
    }

    async next(option: Option, app: App) {
        const newState = new option.next(app)
        newState.previous = this.state
        this.state = newState
        const path = `${(option.next as any).path}/${option.param ? option.param.join('/') : ""}${option.param ? option.param.length ? "/" : "" : ""}`
        window.history.pushState({ name: this.state.name }, "", path)
        if (option.param)
            this.state.setParametros(option.param)
        await this.state.setup()
        await this.setPage(app)
    }

    async back(frompop?: boolean, app?: App) {
        if (!frompop) return window.history.back()
        if (!this.state.previous || (this.state.previous.name === "root" && this.replaceRoot)) return

        const aux = this.state
        this.state = this.state.previous
        this.state.forward = aux

        console.log("antes do setpage", this.state)
        if (this.state.page && this.state.forward.page && app) {
            console.log("setpage", this.state.page)
            await this.setPage(app)
        }
    }

    async forward(app: App) {
        if (!this.state.forward) return

        this.state = this.state.forward
        await this.state.setup()
        await this.setPage(app)
    }

    async push(state: State, app: App) {
        const aux = this.state
        this.state = state
        this.state.previous = aux
        await this.state.setup()
        await this.setPage(app)
        const param = Object.values(this.state.parametros)
        const pathname = `${this.state.name}/${param ? param.join('/') : ""}${param ? param.length ? "/" : "" : ""}`
        if (window.location.pathname === "/" && this.replaceRoot)
            window.history.replaceState({ name: this.state.name }, "", pathname)
        else
            window.history.pushState({ name: this.state.name }, "", pathname)
    }

    async replace(state: State, app: App) {
        const aux = this.state
        this.state = state
        this.state.previous = aux
        await this.state.setup()
        await this.setPage(app)
        const param = Object.values(this.state.parametros)
        const pathname = `${this.state.name}/${param ? param.join('/') : ""}${param ? param.length ? "/" : "" : ""}`
        window.history.replaceState({ name: this.state.name }, "", pathname)
    }

    async read(path: string[], app: App, replace?: boolean) {
        if (!path.length) return true
        const key = path.shift()
        if (key === "" && !path.length) return
        if (!key || (!this.state.childrens[key] && !this.state.childrens["*"]))
            return console.error(key, "não existe em:", this.state.name)
        const k = this.state.childrens[key] ? key : "*"
        const state = new this.state.childrens[k](app)
        if (k === "*") path.push(key)
        path = state.setParametros(path)
        console.log("path", path)
        if (replace) await this.replace(state, app)
        else await this.push(state, app)
        await this.read(path, app)
    }

    async setPage(app: App) {
        if (this.state.page) {
            const page = new this.state.page(app)
            app.root.innerHTML = ""
            app.root.appendChild((await page.create()).element);
        }
    }
}