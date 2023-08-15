export type MapField = { component: string; object: string }
export type Action = (obj: any) => void
export interface Adapter {
    action: Action,
    mapfields: MapField[]
}