import Repository from "./core/repository/_repository.js";
import Page from "./pages/_page.js";
import Route from "./router/_route.js";

export default class App {
    static pages: Page[] = []
    static root: HTMLElement = document.querySelector("#root")!
    static route = Route
    static repository: Repository
    static init(){
        this.route.init()
    }
}