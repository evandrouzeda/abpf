export default class Style {
    static rules: {[key:string]: HTMLStyleElement}={}
    static create(name: string, declaration: {[key in keyof CSSStyleDeclaration]?: string}){
        if(Object.prototype.hasOwnProperty.call(this.rules, name)) return
        
        if(name[0] === ".") name = name.substring(1)
        const style = document.createElement("style")
        let html = `.${name}{`
        for (const key in declaration) {
            html += `${key.replace(/[A-Z]/g, (m)=> `-${m.toLowerCase()}`)}:${declaration[key]};`
        }
        style.innerHTML = `${html}}`
        this.rules[name] = style
        document.head.appendChild(style)
    }
    //TODO: depois da para criar o resto do CRUD
}