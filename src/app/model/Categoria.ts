import { Produto } from "./Produto"

export class Categoria{
  public id_categoria: number
  public nome: string
  public imagem: string
  public descricao: string
  public produto: Produto[]
}
