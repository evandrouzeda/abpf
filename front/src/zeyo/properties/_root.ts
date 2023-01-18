export default class Root {
    element: HTMLElementTagNameMap[keyof HTMLElementTagNameMap]
    constructor(tagName: keyof HTMLElementTagNameMap){
        this.element = document.createElement(tagName)
    }
}