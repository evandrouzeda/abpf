import Z, { Zeyo } from "zeyo";
import Page from ".";
import style from "./inicio.module.css";
import container from "./container.module.css";
import L from "leaflet";
declare const marked: any;
export default class Root extends Page {
    route: string = "/"
    title?: string | undefined;
    children?: Node[] | undefined;
    auth?: string | undefined;
    params?: { [key: string]: string; } | undefined;
    main: Zeyo = Z("div");
    async create(obj?: any): Promise<Zeyo> {
        (async () => {
            await new Promise(res => {
                setTimeout(() => res(""), 1000)
            })
            const map = L.map('map').setView([-28.273433, -52.384293], 17);
            const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
            console.log(map)
        })();
        const clipboard = new window.ClipboardEvent("text")
        const text = clipboard.clipboardData
        console.log(text)
        return this.main = Z("main").class(container.grid).children(
            Z("header").class(style.header, container.breakout).children(
                Z("img").attribute("src", "https://abiblicapf.org/_img/logo-grande.png"),
                Z("nav").class("d-flex", "jc-between").children(
                    Z("a").text("Início"),
                    Z("a").text("Estudos"),
                    Z("a").text("Membro"),
                ),
            ),
            Z("section").class(style.hero, "txt-img").children(
                Z("h2").class(style.primary).children(
                    `Uma `,
                    Z("span").class(style.second).text("Família"),
                    ` de servos de `,
                    Z('span').class(style.second).text("Jesus Cristo"),
                    `, organizados em Células`
                ),
                Z("img").attribute("style", "transform: scaleX(-1);")
                    .attribute("src", "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"),
            ),
            Z("section").class(container["full-width"], style.smash, "txt-bg-img").children(
                Z("img").class(container.breakout2,).set("src", "/_img/biblia.png"),
                Z("div").class(container.breakout2, style["center-gradient"]),
                Z("h2").class(container.free, style["center-text"], style.primary).children(`Vivendo segundo a `, Z("span").class(style.second).text("Bíblia"))
            ),
            Z("section").class(/* style.container, */ "img-txt").children(
                Z("div").class(/* style.shadow */),
                Z("img").class(/* style["left-img"] */).attribute("src", "https://images.unsplash.com/photo-1572154302589-f29e67d304d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"),
                Z("h2").class(/* style["right-text"] */).children(
                    `Preparando as pessoas a alcançar os `,
                    Z("span").class(/* style["second-tint"] */).text("cansados"),
                    ` e `,
                    Z("span").class(/* style["second-tint"] */).text("sobrecarregados"),
                    `,`
                )
            ),
            Z("section").class(/* style.container, style.overflow, */ "txt-bg-img").children(
                Z("h2").class(/* style["center-text-l"] */).children(`através dos relacionamentos pessoais visando a `, Z("span").class(/* style.third */).text("multiplicação"))
            ),
            Z("footer").children(
                Z("div"),
                Z("div"),
                Z("div"),
            ),
            Z("div").set("id", "map").set("style", (" height: 600px; width: 100%" as any)),
            Z("section").class("d-flex").object(o => {
                const content = Z("div")
                o.children(
                    Z("textarea").object((input) => {
                        window.addEventListener("keyup", () => {
                            console.log(input.element.value)
                            content.element.innerHTML = marked.parse(input.element.value)
                        })
                    }),
                    content
                )
            }),
        )
    }
}
