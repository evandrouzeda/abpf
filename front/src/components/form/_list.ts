import Button from "./button.js";
import ObjectV from "./objectv.js";
import Password from "./password.js";
import Input from "./input.js";
import DateTime from "./date.js";
import Option from "./option.js";
import ObjectH from "./objecth.js";
import Checkbox from "./checkbox.js";
import Select from "./select.js";
import Show from "./show.js";
interface Adapter {
    getFields(): Promise<{ [index: string]: any }>
}
//export type List = Array<{ value: string; name: string } | Adapter>
export type NameValueList = Array<{ value: string; name: string }>
//Action se retornar true faz acao normal, se false retorna um. Só esta funcionando no ObjectV
export type returns = "object" | "none" | "back" | "refresh" | "begin"
export type ActionFunction = (o?: any) => void
export type Action2 = (o?: any) => Promise<returns> | returns

export interface FieldsTypes {
    "text": [label: string, placeholder: string];
    "number": [label: string, placeholder: string];
    "password": [label: string, placeholder: string];
    "show": [label: string];
    "select": [label: string, placeholder: string, list: NameValueList];
    "selectrepete": [label: string, placeholder: string, list: NameValueList];
    "selectfile": [label: string, placeholder: string];
    "selectrange": [label: string];
    "objecth": [label: string, list: Adapter[], action?: ActionFunction];
    "objectC": [label: string];
    "objectV": [label: string, list: Adapter[], action?: ActionFunction];
    "objectVL": [label: string, list: Adapter[], extra: {order?: ActionFunction, action?: Action2}];
    "objectTable": [label: string];
    "objectm": [label: string];
    "objectVIMG": [label: string];
    "disabled": [label: string, placeholder: string];
    "toogle": [label: string, placeholder: string];
    "add": [label: string, placeholder: string];
    "skip": [label: string, placeholder: string];
    "time": [label: string, placeholder: string];
    "times": [label: string, placeholder: string];
    "duracao": [label: string, placeholder: string];
    "button": [label: string, placeholder: string];
    "date": [label: string, placeholder: string];
    "textarea": [label: string, placeholder: string];
    "opcoes": [label: string];
    "snack": [label: string];
    "error": [label: string];
}
export const FieldsTypesMap: {[key: string]: string[]} = {
    "text": ["label", "placeholder"],
    "number": ["label", "placeholder"],
    "password": ["label", "placeholder"],
    "show": ["label"],
    "select": ["label", "placeholder", "list"],
    "selectrepete": ["label", "placeholder", "list"],
    "selectfile": ["label", "placeholder"],
    "selectrange": ["label"],
    "objecth": ["label", "list", "action"],
    "objectC": ["label"],
    "objectV": ["label", "list", "action"],
    "objectVL": ["label", "list", "extra"],
    "objectTable": ["label"],
    "objectm": ["label"],
    "objectVIMG": ["label"],
    "disabled": ["label", "placeholder"],
    "toogle": ["label", "placeholder"],
    "add": ["label", "placeholder"],
    "skip": ["label", "placeholder"],
    "time": ["label", "placeholder"],
    "times": ["label", "placeholder"],
    "duracao": ["label", "placeholder"],
    "button": ["label", "placeholder"],
    "date": ["label", "placeholder"],
    "textarea": ["label", "placeholder"],
    "opcoes": ["label"],
    "snack": ["label"],
    "error": ["label"],
}
export interface List {
    "text": Input
    "show": Show
    "date": Input
    "datetime-local": DateTime
    "password": Password
    "objectv": ObjectV
    "objecth": ObjectH
    "select": Select,
    "button": Button
    "option": Option
    "checkbox": Checkbox
}

export interface ListMatriz {
    "text": [label: string, placeholder: string];
    "show": [label: string];
    "date": [label: string, placeholder: string]
    "datetime-local": [label: string, placeholder: string]
    "password": [label: string, placeholder: string]
    "objectv": [label: string, list: any[], action?: ActionFunction]
    "objecth": [label: string, list: Adapter[], action?: ActionFunction]
    "select": [label: string, list: {value: string, name: string}[]]
    "button": [label: string, action?: ActionFunction]
    "option": [label: string, placeholder: string]
    "checkbox": [label: string, placeholder: string]
}

export class Fields {
    static list: { [key: string]: any } = {
        "text": Input,
        "show": Show,
        "date": Input,
        "datetime-local": DateTime,
        "password": Password,
        "objectv": ObjectV,
        "objecth": ObjectH,
        "select": Select,
        "button": Button,
        "option": Option,
        "checkbox": Checkbox
    }
}