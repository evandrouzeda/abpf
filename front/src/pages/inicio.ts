import App from "../app.js";
import Watch from "../components/_watch.js";
import Z from "../zeyo/zeyo.js";
import Page from "./_page.js";

export default class Inicio implements Page {
    route: string = "/";
    title?: string;
    children?: Node[];
    auth?: string;
    params?: { [key: string]: string; };
    main = Z("main");
    async create() {
        return Z("main").class("d-grid").children(
            Z("header").class("header").children(
                Z("h1").text("Aliança Bíblica em Passo Fundo")
            ),
            Z("section").class("container").children(
                Z("div").atrib("style", "grid-area: 5/ 10/ span 14/ span 8;background-color: #85A63F;"),
                Z("img").atrib("style", `width: 100%;height: 100%;object-fit: cover;grid-area: 3/ 9/ span 14/ span 8;`)
                    .atrib("src", "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"),
                Z("h2").children(
                    `Uma `,
                    Z("span").class("second").text("Família"),
                    ` de servos de `,
                    Z('span').class("second").text("Jesus Cristo"),
                    `, organizados em Células`
                ).atrib("style", `grid-area: 5/3/span 10/span 7;font-size: 3.6em;color: #0378A6;z-index: 3;`)
            ),
            Z("section").class("container").children(
                Z("h2").HTML(`Vivendo segundo a <span style="color: #F27F3D;">Bíblia</span>`)
            ),
            Z("section").class("container").children(
                Z("div").atrib("style", "grid-area: 5/ 10/ span 14/ span 8;background-color: #85A63F;"),
                Z("img").atrib("src", "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"),
                Z("h2").HTML(`Preparando as pessoas a alcançar os cansados e sobrecarregados,`)
            ),
            Z("section").class("container").children(
                Z("h2").HTML(`através dos relacionamentos pessoais visando a <span style="color: #F27F3D;">multiplicação</span>.`)
            ),
            Z("footer").children(
                Z("div"),
                Z("div"),
                Z("div"),
            )
        )
    }
}