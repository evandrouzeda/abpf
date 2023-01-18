import Repository from "./_repository";

export default class RepositoryLocalStorage implements Repository{
    create(collection: string, value: any): Promise<[any, boolean]> {
        throw new Error("Method not implemented.");
    }
    read(collection: string, id: string): Promise<[any, boolean]> {
        throw new Error("Method not implemented.");
    }
    update(collection: string, id: string, value: any): Promise<[any, boolean]> {
        throw new Error("Method not implemented.");
    }
    findMany(collection: string, query: { [index: string]: any; }): Promise<[any[], boolean]> {
        throw new Error("Method not implemented.");
    }
    findOne(collection: string, query: { [index: string]: any; }): Promise<[any, boolean]> {
        throw new Error("Method not implemented.");
    }

}