export default class Extra {
    title: string
    action: string
    controller: string
    extra?: any
    constructor(title: string, action: string, controller: string, extra?: any) {
        this.title = title
        this.action = action
        this.controller = controller
        this.extra = extra
    }
}