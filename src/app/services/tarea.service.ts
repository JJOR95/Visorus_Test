import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../models/producto';
import { Articulo } from '../models/producto';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})

export class TareaService {
  private apiUrlCat = 'http://localhost:5000/categoria'
  private apiUrlArt = 'http://localhost:5000/articulo'

  constructor(private http: HttpClient) { }

  getCat() : Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.apiUrlCat)
  }

  getArt() : Observable<Articulo[]>{
    return this.http.get<Articulo[]>(this.apiUrlArt)
  }

  addNewArticle(articulo: Articulo[]): Observable<Articulo>{
    return this.http.post<Articulo>(this.apiUrlArt, articulo)
  }
}
