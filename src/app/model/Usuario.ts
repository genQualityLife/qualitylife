import { Produto } from "./Produto"

export class Usuario{
  public id_usuario: number
  public nome: string
  public email: string
  public senha: string
  public tipo: string
  public produto: Produto[]
}
