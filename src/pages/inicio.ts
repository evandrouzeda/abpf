import Z from "zeyo";
import Page from ".";
import App from "../app";

export default class Inicio extends Page {
    route: string = "/";
    title?: string;
    children?: Node[];
    auth?: string;
    params?: { [key: string]: string; };
    main = Z("main");
    async create() {
        return Z("main").class("d-grid").children(
            Z("header").class("header").children(
                Z("img").attribute("src", "https://abiblicapf.org/_img/logo-grande.png"),
            ),
            Z("nav").children(
                Z("a").text("Início"),
                Z("a").text("Estudos"),
                Z("a").text("Membro"),
            ),
            Z("section").class("container", "txt-img").children(
                Z("div").class("shadow").attribute("style", "background-color: #85A63F;"),
                Z("img").attribute("style", "transform: scaleX(-1);")
                    .attribute("src", "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"),
                Z("h2").children(
                    `Uma `,
                    Z("span").class("second").text("Família"),
                    ` de servos de `,
                    Z('span').class("second").text("Jesus Cristo"),
                    `, organizados em Células`
                )
            ),
            Z("section").class("container", "txt-bg-img").children(
                Z("img").attribute("src", "/_img/biblia.png"),
                Z("h2").children(`Vivendo segundo a `, Z("span").class("second").text("Bíblia"))
            ),
            Z("section").class("container", "img-txt").children(
                Z("div").class("shadow").attribute("style", "background-color: #D0D0D0;"),
                Z("img").attribute("src", "https://images.unsplash.com/photo-1572154302589-f29e67d304d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"),
                Z("h2").children(
                    `Preparando as pessoas a alcançar os `,
                    Z("span").class("second").text("cansados"),
                    ` e `,
                    Z("span").class("second").text("sobrecarregados"),
                    `,`
                )
            ),
            Z("section").class("container", "txt-bg-img").children(
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