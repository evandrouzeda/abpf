import Z from "zeyo"
import Component from ".."
import styleproduto from "./produto.module.css"
import ModalContainer from "../../modal/container"
import { Produto } from "./lib"
import Restaurante from "../../states/restaurante"
import Load from "../load"
interface Horario {
    inicio: string;
    fim: string;
    dia: string;
    nome: string;
}
export default class ModalProduto extends Component {
    main = Z("div")
    async create(produto: Produto) {

        function GetNextDay(horarios: Horario[], day: number): string {
            day++
            if (day === 7) day = 0
            const next = horarios.filter(h => Number(h.dia) === day)
            if (!next.length) return GetNextDay(horarios, day)
            return `- Abrirá ${next[0].nome} às ${next[0].inicio}`
        }
        function GetStatus(date: Date, horarios: Horario[]): [string, string] {
            const hoje = horarios.filter(h => Number(h.dia) === date.getDay())

            if (!hoje.length) return ["Fechado", GetNextDay(horarios, date.getDay())];

            for (const horario of hoje) {
                const [ih, im] = horario.inicio.split(":").map(Number)
                const inicio = new Date().setHours(ih, im)
                const [fh, fm] = horario.fim.split(":").map(Number)
                const fim = new Date().setHours(fh, fm)
                if (inicio < date.getTime() && fim > date.getTime())
                    return [`Aberto`, `- Fechará às ${horario.fim}`]
                if (inicio > date.getTime())
                    return [`Fechado`, `- Abrirá hoje às ${horario.inicio}`]
            }

            return ["Fechado", GetNextDay(horarios, date.getDay())];
        };

        /* const d = new Date()
        console.log(GetStatus(d, horarios))
        const horario = GetStatus(d, horarios) */
        return this.main = new ModalContainer(this.app).inner(
            Z("div").class(styleproduto.modal, "d-grid").children(
                Z("div").class(styleproduto.header).children(
                    Z("img").set("src", produto.img).object(async o => {
                        const [imagens, err] = await this.app.repository.usecase<any[]>("getimagensitem", { _id: produto._id })
                        if (err) return
                        o.set("src", imagens[0].url)
                    }),
                    Z("i").class(styleproduto.back)
                        .click(() => this.app.hash.remove()).HTML(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left" style="width: 30px;"><polyline points="15 18 9 12 15 6"></polyline></svg>`),
                    Z("div").class(styleproduto.text).children(
                        /* Z("p").class("d-flex").HTML(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px"  fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" style="stroke: none;"></path><circle cx="12" cy="10" r="3" style="fill: white;stroke: none;"></circle></svg>`
                            + produto.restaurante), */
                        Z("h2").text(produto.nome),
                        Z("p").text(`R$ ${produto.preco}`),
                    )
                ),
                Z("div").class(styleproduto.body, "d-grid", "gap-g").children(
                    Z("p").text(produto.descricao),
                    Z("div").object(async o => {
                        o.children(
                            new Load(this.app).create()
                        )
                        const [restaurante, err] = await this.app.repository.usecase<any>("getrestauranteinfo", { _id: typeof produto.restaurante === "object" ? produto.restaurante._id : produto.restaurante })
                        console.log(restaurante, err)
                        const horario = GetStatus(new Date(), restaurante.horarios);
                        const horariostable: { [key: string]: { nome: string, horarios: string[] } } = {}
                        restaurante.horarios.forEach((h: any) => {
                            if (Object.prototype.hasOwnProperty.call(horariostable, h.dia))
                                horariostable[h.dia].horarios.push(`${h.inicio} - ${h.fim}`)
                            else horariostable[h.dia] = {
                                nome: h.nome,
                                horarios: [`${h.inicio} - ${h.fim}`]
                            }
                        });
                        o.HTML("")
                        o.children(
                            Z("h3").text(restaurante.nome),
                            Z("div").class("d-grid", "gap-m", "p-s").children(
                                Z("div").class("d-flex", "gap-m", "a-center").children(
                                    Z("i").class("d-flex").HTML(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin" style="width: 20px;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`),
                                    Z("p").text(restaurante.endereco)
                                ),
                                Z("div").class("d-flex", "gap-m", "a-center", "pointer").children(
                                    Z("i").class("d-flex").HTML(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock" style="width: 20px;"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`),
                                    Z("b").children(Z("span").attribute("style", `color: ${horario[0] === 'Aberto' ? 'green' : 'red'}`).text(horario[0]), ` ${horario[1]}`),
                                ).object(o => {
                                    const down = Z("i").class("d-flex").HTML(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"  style="width: 20px;"><polyline points="6 9 12 15 18 9"/></svg>`)
                                    o.children(down).click(() => {
                                        console.log(o.element.nextElementSibling)
                                        if (o.element.nextElementSibling?.classList.contains(styleproduto.show)){
                                            down.element.style.rotate = "0deg"
                                            o.element.nextElementSibling?.classList.remove(styleproduto.show)
                                        } else {
                                            down.element.style.rotate = "180deg"
                                            o.element.nextElementSibling?.classList.add(styleproduto.show)
                                        }
                                    })
                                }),
                                Z("table").class(styleproduto.horario).children(
                                    ...(Object.keys(horariostable).map(k => {
                                        return Z("tr").children(
                                            Z("td").children(Z("p").text(horariostable[k].nome)),
                                            Z("td").class("d-grid").children(...(horariostable[k].horarios.map(h => Z("b").text(h))))
                                        )
                                    }))
                                ),
                                Z("a").class("pointer").attribute("style", "text-decoration: underline").text("Ver mais produtos").click((e) => {
                                    e.preventDefault();
                                    if (this.app.navigation.state.name !== produto.restaurante.url) {
                                        this.app.hash.on = false
                                        this.app.navigation.read([produto.restaurante.url], this.app, true)
                                    }
                                })
                            )
                        )
                    })
                ),
                Z("div").class(styleproduto.footer).children(
                    Z("i")
                        .HTML(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`)
                        .click(async () => {
                            const shareData = {
                                title: "Alas Menu",
                                text: "Olha que incrível o que eu achei!",
                                url: `https://alasmenu.evandrouzeda.com/${produto.restaurante.url}/${produto.url}`,
                            };

                            try {
                                await navigator.share(shareData);
                                console.log("MDN shared successfully");
                            } catch (err) {
                                alert(`Error: ${err}`);
                            }

                        }),
                    Z("button").text("Pedir")
                ),
            )
        )
    }

    /* showing = false
    modal = new Bottom()
    async show(form?: Form) {
        if (form){
            window.location.hash = "modal"
            this.app.root.appendChild((await this.modal.create(form!)).element)
        } else{
            //window.history.replaceState("", document.title, window.location.pathname)
            //if(window.location.hash.length > 1) window.history.back()
            this.modal.main.element.remove()
        }
    } */
}