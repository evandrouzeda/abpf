export default interface Repository {
    create(collection: string, value: any): Promise<[any, boolean]>;
    update(collection: string, id: string, value: any): Promise<[any, boolean]>
    updateQuery(collection: string, query: any, value: any): Promise<[any, boolean]>
    updateMany(collection: string, query: any, value: any): Promise<[any, boolean]>
    delete(collection: string, id: string): Promise<[any, boolean]>
    deleteMany(collection: string, query: { [index: string]: any }): Promise<[Array<any>, boolean]>;
    findMany(collection: string, query: { [index: string]: any }): Promise<[Array<any>, boolean]>;
    findManySortLimit(collection: string, query: { [index: string]: any; }, limit: number, sort: 1 | -1): Promise<[Array<any>, boolean]>;
    findOne(collection: string, query: { [index: string]: any }): Promise<[any, boolean]>;
    read(collection: string, query: any): Promise<[Array<any>, boolean]>;
    readMany(collection: string, id: string): Promise<[Array<any>, boolean]>;
    readMore(collection: string, query: any): Promise<[Array<any>, boolean]>;
    usecase<T>(name: string, data?: any): Promise<[T, boolean]>;
}