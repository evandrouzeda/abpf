import { Zeyo } from "../../zeyo/lib.js";
import Z from "../../zeyo/zeyo.js";
import Link from "../link.js";

export default class AppLayout {
    static slot: Zeyo = Z("main")
    static main: Zeyo = Z("main").class("d-grid").object(e => {
        e.element.style.gridTemplateRows = "auto 10%"
        e.element.style.height = "100vh"
    }).children(
        this.slot,
        Z("nav").class("d-flex", "jc-evenly", "w-100").children(
            new Link().create({text: "H", route:"/"}).class("w-100"),
            new Link().create({text: "C", route:"/calendar"}).class("w-100"),
            new Link().create({text: "P", route:"/pages"}).class("w-100"),
            new Link().create({text: "T", route:"/templates"}).class("w-100"),
        )
    )
    static inner(z: Zeyo){
        this.slot.element.parentElement?.replaceChild(z.element, this.slot.element);
        this.slot = z
        return this.main
    }
}