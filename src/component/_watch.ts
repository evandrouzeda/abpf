import Component from ".";

/**
 * This function will watch a object, if something changes, it will change the component
 * @param obj 
 * @param component 
 * @returns 
 */
export default function Watch(obj: any, component: Component): [any, Component] {
    const newComponent = new Proxy(component, {
        set: (target, key, value) => {
            if (key === "main")
                target.main.element.parentElement?.replaceChild(value.element, target.main.element);
            target[key as keyof typeof target] = value
            return true
        }
    })
    class Watcher implements ProxyHandler<any> {
        key = ""
        parent: any
        constructor(parent: any, key: string) {
            this.parent = parent
            this.key = key
        }
        get(target: any, key: string, receiver: any): any {
            if (typeof target[key] === 'object' && target[key] !== null) {
                return new Proxy(target[key], new Watcher(receiver, key))
            } else {
                return target[key];
            }
        }
        set(target: any, key: string, value: any, receiver: any) {
            target[key as keyof typeof target] = value
            if (this.parent === null)
                newComponent.create(receiver)
            else this.parent[this.key] = target
            return true
        }
    }
    return [new Proxy(obj, new Watcher(null, "")), newComponent]
}