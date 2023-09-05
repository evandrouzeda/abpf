import Z, { Zeyo } from "zeyo";
import Page from ".";
import style from "./inicio.module.css"

export default class Root extends Page {
    route: string = "/"
    title?: string | undefined;
    children?: Node[] | undefined;
    auth?: string | undefined;
    params?: { [key: string]: string; } | undefined;
    main: Zeyo = Z("div");
    async create(obj?: any): Promise<Zeyo> {
        return this.main = Z("main").class("d-grid", "gap-g", "jc-center").children(
            Z("header").class(style.header).children(
                Z("img").attribute("src", "https://abiblicapf.org/_img/logo-grande.png"),
                Z("nav").class("d-flex", "jc-between").children(
                    Z("a").text("Início"),
                    Z("a").text("Estudos"),
                    Z("a").text("Membro"),
                ),
            ),
            Z("section").class(style.container, "txt-img").children(
                Z("h2").class(style.primary, style["first-text"]).children(
                    `Uma `,
                    Z("span").class(style.second).text("Família"),
                    ` de servos de `,
                    Z('span').class(style.second).text("Jesus Cristo"),
                    `, organizados em Células`
                ),
                Z("img").class(style["second-img"]).attribute("style", "transform: scaleX(-1);")
                    .attribute("src", "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"),
            ),
            Z("section").class(style.container, style.overflow, "txt-bg-img").children(
                Z("img").class(style["center-img"]).attribute("src", "/_img/biblia.png"),
                Z("h2").class(style.primary, style["center-text"]).children(`Vivendo segundo a `, Z("span").class(style.second).text("Bíblia"))
            ),
            Z("section").class(style.container, "img-txt").children(
                Z("div").class("shadow").attribute("style", "background-color: #D0D0D0;"),
                Z("img").attribute("src", "https://images.unsplash.com/photo-1572154302589-f29e67d304d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"),
                Z("h2").children(
                    `Preparando as pessoas a alcançar os `,
                    Z("span").class(style.second).text("cansados"),
                    ` e `,
                    Z("span").class(style.second).text("sobrecarregados"),
                    `,`
                )
            ),
            Z("section").class(style.container, "txt-bg-img").children(
                Z("h2").children(`através dos relacionamentos pessoais visando a `, Z("span").class("third").text("multiplicação"))
            ),
            Z("footer").children(
                Z("div"),
                Z("div"),
                Z("div"),
            )
        )
    }
}
