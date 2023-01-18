export default interface Repository {
    create(collection: string, value: any): Promise<[any, boolean]>;
    read(collection: string, id: string): Promise<[any, boolean]>
    update(collection: string, id: string, value: any): Promise<[any, boolean]>
    findMany(collection: string, query: { [index: string]: any }): Promise<[Array<any>, boolean]>;
    findOne(collection: string, query: { [index: string]: any }): Promise<[any, boolean]>;
}