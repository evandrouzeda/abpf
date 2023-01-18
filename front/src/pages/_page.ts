import Component from "../components/_component"

export default interface Page extends Component{
    route: string
    title?: string
    children?: Array<Node>
    auth?: string
    params?: { [key: string]: string }
}