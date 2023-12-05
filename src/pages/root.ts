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
            const map = L.map('map').setView([-28.273562363919524, -52.38432481523411], 17);
            const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
            const greenIcon = L.icon({
                iconUrl: '/_img/iconelocal.png',
                shadowUrl: '',
    
                iconSize: [50, 50], // size of the icon
                shadowSize: [50, 64], // size of the shadow
                iconAnchor: [25, 50], // point of the icon which will correspond to marker's location
                shadowAnchor: [4, 62],  // the same for the shadow
                popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
            });
            L.marker([-28.273562363919524, -52.38432481523411], {icon: greenIcon}).addTo(map);
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
            Z("section").class(style.even, "img-txt").children(
                Z("img").attribute("src", "https://images.unsplash.com/photo-1572154302589-f29e67d304d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"),
                Z("div").class(style.shadow),
                Z("h2").children(
                    `Preparando as pessoas a alcançar os `,
                    Z("span").class(style["second-tint"]).text("cansados"),
                    ` e `,
                    Z("span").class(style["second-tint"]).text("sobrecarregados"),
                    `,`
                )
            ),
            Z("section").class(style.center, "txt-bg-img").children(
                Z("h2").class(style.primary).children(`através dos relacionamentos pessoais visando a `, Z("span").class(style.third).text("multiplicação"))
            ),
            Z("section").class(container["full-width"],style["bg-second"], "txt-bg-img").children(
                Z("div").class(style.center).children(
                    Z("h2").children(`“Levai as cargas uns dos outros e, assim, cumprireis a lei de Cristo.”`),
                    Z("h2").class(style["lighter"]).children(`Gálatas 6:2`)
                )
            ),
            Z("footer").class(container["full-width"], style["bg-primary"]).children(
                Z("div").class(container["breakout-grid"], style["even-columns"]).children(
                    Z("div").set("id", "map").class(style.map),
                    Z("div").class(style.about).children(
                        Z("div").class("d-grid", "gap-g").children(
                            Z("p").HTML("Presidente Vargas 1937 Sala: 04;<br>Vila Rodrigues<br>Passo Fundo RS<br>99070-000"),
                            Z("a").set("href", "https://maps.app.goo.gl/i9oJzDgg3vW3P1eV8").set("target", "_blank").class(style.button).text("Abrir Maps")
                        ),
                        Z("div").class("d-flex", "gap-m").children(
                            Z("a").set("href", "https://www.instagram.com/abiblicapf").set("target", "_blank").HTML(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM18.7233 11.2773C20.0886 11.2152 20.5249 11.2 24.0012 11.2H23.9972C27.4746 11.2 27.9092 11.2152 29.2746 11.2773C30.6373 11.3397 31.5679 11.5555 32.384 11.872C33.2266 12.1987 33.9386 12.636 34.6506 13.348C35.3627 14.0595 35.8 14.7736 36.128 15.6155C36.4427 16.4294 36.6587 17.3595 36.7227 18.7222C36.784 20.0876 36.8 20.5238 36.8 24.0001C36.8 27.4764 36.784 27.9116 36.7227 29.277C36.6587 30.6391 36.4427 31.5695 36.128 32.3837C35.8 33.2253 35.3627 33.9394 34.6506 34.6509C33.9394 35.3629 33.2264 35.8013 32.3848 36.1283C31.5703 36.4448 30.6391 36.6605 29.2765 36.7229C27.9111 36.7851 27.4762 36.8003 23.9996 36.8003C20.5236 36.8003 20.0876 36.7851 18.7222 36.7229C17.3598 36.6605 16.4294 36.4448 15.615 36.1283C14.7736 35.8013 14.0595 35.3629 13.3483 34.6509C12.6365 33.9394 12.1992 33.2253 11.872 32.3834C11.5557 31.5695 11.34 30.6394 11.2773 29.2767C11.2155 27.9114 11.2 27.4764 11.2 24.0001C11.2 20.5238 11.216 20.0873 11.2771 18.7219C11.3384 17.3598 11.5544 16.4294 11.8717 15.6152C12.1997 14.7736 12.6371 14.0595 13.3491 13.348C14.0606 12.6363 14.7747 12.1989 15.6166 11.872C16.4305 11.5555 17.3606 11.3397 18.7233 11.2773Z"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.853 13.5067C23.0759 13.5064 23.3158 13.5065 23.5746 13.5066L24.0013 13.5067C27.4189 13.5067 27.824 13.519 29.1736 13.5803C30.4216 13.6374 31.0989 13.8459 31.5501 14.0211C32.1475 14.2531 32.5733 14.5305 33.0211 14.9785C33.4691 15.4265 33.7464 15.8532 33.979 16.4505C34.1542 16.9012 34.363 17.5785 34.4198 18.8265C34.4811 20.1759 34.4944 20.5812 34.4944 23.9972C34.4944 27.4133 34.4811 27.8186 34.4198 29.168C34.3627 30.416 34.1542 31.0933 33.979 31.544C33.747 32.1413 33.4691 32.5667 33.0211 33.0144C32.5731 33.4624 32.1477 33.7398 31.5501 33.9718C31.0995 34.1478 30.4216 34.3558 29.1736 34.4128C27.8242 34.4742 27.4189 34.4875 24.0013 34.4875C20.5834 34.4875 20.1783 34.4742 18.8289 34.4128C17.5809 34.3552 16.9036 34.1467 16.4521 33.9715C15.8548 33.7395 15.4281 33.4621 14.9801 33.0141C14.5321 32.5661 14.2548 32.1405 14.0222 31.5429C13.847 31.0923 13.6382 30.4149 13.5814 29.1669C13.5201 27.8176 13.5078 27.4122 13.5078 23.994C13.5078 20.5759 13.5201 20.1727 13.5814 18.8233C13.6385 17.5753 13.847 16.898 14.0222 16.4468C14.2542 15.8494 14.5321 15.4228 14.9801 14.9748C15.4281 14.5268 15.8548 14.2494 16.4521 14.0169C16.9033 13.8409 17.5809 13.6329 18.8289 13.5755C20.0097 13.5222 20.4674 13.5062 22.853 13.5035V13.5067ZM30.8339 15.6321C29.9859 15.6321 29.2978 16.3193 29.2978 17.1676C29.2978 18.0156 29.9859 18.7036 30.8339 18.7036C31.6819 18.7036 32.3699 18.0156 32.3699 17.1676C32.3699 16.3196 31.6819 15.6316 30.8339 15.6316V15.6321ZM17.4279 24.0002C17.4279 20.3701 20.3709 17.4269 24.001 17.4268C27.6312 17.4268 30.5736 20.37 30.5736 24.0002C30.5736 27.6304 27.6314 30.5723 24.0013 30.5723C20.3711 30.5723 17.4279 27.6304 17.4279 24.0002Z"></path>
                            <path d="M24.0012 19.7334C26.3575 19.7334 28.2679 21.6436 28.2679 24.0001C28.2679 26.3564 26.3575 28.2668 24.0012 28.2668C21.6447 28.2668 19.7345 26.3564 19.7345 24.0001C19.7345 21.6436 21.6447 19.7334 24.0012 19.7334Z"></path>
                            </svg>`),
                            Z("a").set("href", "https://www.facebook.com/aliancapf").set("target", "_blank").HTML(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM26.5016 25.0542V38.1115H21.0991V25.0547H18.4V20.5551H21.0991V17.8536C21.0991 14.1828 22.6231 12 26.9532 12H30.5581V16.5001H28.3048C26.6192 16.5001 26.5077 17.1289 26.5077 18.3025L26.5016 20.5546H30.5836L30.1059 25.0542H26.5016Z"></path>
                            </svg>`),
                            Z("a").set("href", "mailto:ministerio@abiblicapf.org").HTML(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 72 72" version="1.1">
                            <path d="M36,72 L36,72 C55.882251,72 72,55.882251 72,36 L72,36 C72,16.117749 55.882251,-3.65231026e-15 36,0 L36,0 C16.117749,3.65231026e-15 -2.4348735e-15,16.117749 0,36 L0,36 C2.4348735e-15,55.882251 16.117749,72 36,72 Z" id="Oval"></path><path d="M18,26.1623226 L18,46.5476129 C18,47.6566452 18.8117419,48.5554839 19.9300645,48.5554839 L51.7447742,48.5554839 C52.8619355,48.5554839 53.6748387,47.6461935 53.6748387,46.5476129 L53.6748387,26.1623226 C53.6748387,24.9452903 52.947871,24 51.7447742,24 L19.9300645,24 C18.6805161,24 18,24.9685161 18,26.1623226 M20.9334194,27.9379355 C20.9334194,27.4467097 21.2307097,27.1656774 21.7056774,27.1656774 C21.9994839,27.1656774 33.560129,34.4910968 34.2603871,34.9207742 L36.0696774,36.0460645 C36.6433548,35.6616774 37.2193548,35.3330323 37.8139355,34.9347097 C39.0274839,34.1589677 49.8251613,27.1656774 50.1224516,27.1656774 C50.5985806,27.1656774 50.8947097,27.4467097 50.8947097,27.9379355 C50.8947097,28.4581935 49.8925161,28.9749677 49.239871,29.3732903 C45.1393548,31.8723871 41.04,34.5967742 36.980129,37.1887742 C36.7432258,37.3490323 36.2845161,37.6916129 35.9407742,37.6393548 C35.5575484,37.580129 23.7936774,30.0224516 21.6534194,28.7636129 C21.3317419,28.5743226 20.9334194,28.4012903 20.9334194,27.9379355" fill="#FFFFFF"></path>
                        </svg>`)
                        )
                    ),
                )
            ),
            /* Z("section").class("d-flex").object(o => {
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
            }), */
        )
    }
}
