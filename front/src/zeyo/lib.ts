export interface Root {
    element: HTMLElementTagNameMap[keyof HTMLElementTagNameMap]
}

export interface AddClass { class(...tokens: string[]): Zeyo }
export interface Children { children(...child: Zeyo[]): Zeyo }
export interface Object { object(cb: (e: Zeyo) => void): Zeyo }

export interface Atribute {
    atrib<K extends keyof Atributes>(key: K, value: string): Zeyo
    atribs(atribs: { [key: string]: string }): Zeyo
}

export interface Text { text(t: string): Zeyo }
export interface Click { click(cb: (e: MouseEvent) => void): Zeyo }
export interface On { on<K extends keyof HTMLElementEventMap>(event: K, cb: (this: HTMLAnchorElement, ev: HTMLElementEventMap[K]) => void): Zeyo }
export interface HTML { HTML(t: string): Zeyo }

export interface Zeyo extends Root, AddClass, Children, Object, Atribute, Text, Click, On, HTML {
    element: HTMLElementTagNameMap[keyof HTMLElementTagNameMap]
};

export type ZeyoConstructor<T = Root> = new (...args: any[]) => T;

export type ZeyoStyle = { [key in keyof CSSStyleDeclaration]?: string }
export interface Atributes {
    "type": string
    "placeholder": string
    "value": string
    "src": string
    "style": string
}