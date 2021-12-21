import { Categoria } from "./Categoria"
import { Usuario } from "./Usuario"

export class Produto
{
  public id_produto: number
  public nome: string
  public imagem: string
  public descricao: string
  public preco: number
  public categoria: Categoria
  public usuario: Usuario
}
