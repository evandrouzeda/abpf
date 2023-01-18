import Hash from "./hash/_hash.js"
import Push from "./push.js"

export default class Route extends Push {
    static hash = Hash
    static init() {
        this.build(window.location.pathname)
        window.onpopstate = e => {
            e.preventDefault()
            if (this.hash.on){
                this.hash.on = false
            } else if(window.location.hash.length <=1)
                this.build(window.location.pathname)
        }
        window.onhashchange = e => {
            if (e.newURL.split("#").length > 1)
                this.hash.on = true
            else this.hash.remove()
        }
    }
}