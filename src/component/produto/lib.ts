export interface Restaurante {
    _id: number;
    nome: string;
    url: string;
}
export interface Produto {
    _id: any;
    img: string;
    nome: string;
    preco: string;
    descricao: string;
    restaurante: Restaurante;
    url: string;
}