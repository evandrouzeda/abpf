import App from "../app.js";
import Z from "../zeyo/zeyo.js";
import Component from "./_component.js";

export default class Link implements Component{
    main = Z("button")
    create(b: {text: string, route: string}){
        return this.main = Z("a").object(z => {
            z.element.innerText = b.text
            z.element.onclick = () => {
                App.route.push(b.route)
            }
        })
    }
}