import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(
    private http: HttpClient,
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>('https://genqualitylife.herokuapp.com/categorias', this.token)
  }

  getByIdCategorias(id: number): Observable<Categoria>{
    return this.http.get<Categoria>(`https://genqualitylife.herokuapp.com/categorias/${id}`, this.token)
  }

  getByNomeCategoria(nome: string): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`https://genqualitylife.herokuapp.com/categorias/nome/${nome}`, this.token)
  }

  postCategorias(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>('https://genqualitylife.herokuapp.com/categorias', categoria, this.token)
  }

  putCategorias(categoria: Categoria): Observable<Categoria>{
    return this.http.put<Categoria>('https://genqualitylife.herokuapp.com/categorias', categoria, this.token)
  }

  deleteCategorias(id: number){
    return this.http.delete<Categoria>(`https://genqualitylife.herokuapp.com/categorias/${id}`, this.token)
  }
}
