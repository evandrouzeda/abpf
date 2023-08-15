import Repository from "../repository"
import RepositoryEmpty from "../repository/empty"
import { ZeyoAppConstructor } from "./lib"

export default function Repository<Base extends ZeyoAppConstructor>(base: Base) {
    return class extends base {
        repository: Repository = new RepositoryEmpty()
        setRepository(repository: any) {
            this.repository = repository
            return this
        }
    }
}