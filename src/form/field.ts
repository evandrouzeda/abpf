import { ActionFunction, FieldList, List, ListMatriz } from "./components/_list";
import { Zeyo } from "zeyo";
export type Fields = { [key: string]: IField }
export interface IField {
    type: string
    label?: string
    placeholder?: string
    list?: Array<{ value: string; name: string } | any>
    model?: any
    action?: any// tenho que colocar eese => Action
    order?: ActionFunction
    element: Zeyo;
    create(key: string): Zeyo;
    getValue(): any;
    setValue(value: any): void;
}
export class Field {
    //TODO: aqui acredito que de para retornar o objeto do campo selecionado, e o create seria chamado na interface
    static make<T extends keyof List>(type: T, ...params: ListMatriz[T]): List[T] {
        return new FieldList.list[type](...params)
    }
}