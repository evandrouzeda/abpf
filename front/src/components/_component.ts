import { Zeyo } from "../zeyo/lib";

export default interface Component { main: Zeyo, create: (o?: any) => Zeyo | Promise<Zeyo> }