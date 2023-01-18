import { Zeyo } from "../../zeyo/lib.js";

export interface FormElement {
    label: string
    placeholder: string
    element: Zeyo
    type: string
}
export type FormElementContructor<T = FormElement> = new (...args: any[]) => T;