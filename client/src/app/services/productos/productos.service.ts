import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Productos } from '../../models/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

getProductos(){
  return this.http.get(`${this.API_URI}/productos`)
}

getProducto(id: string) {
  return this.http.get(`${this.API_URI}/productos/${id}`);
}
deleteProducto(id: string){
  return this.http.delete(`${this.API_URI}/productos/${id}`);
}

saveProducto(productos: Productos){
  return this.http.post(`${this.API_URI}/productos/`, productos);
}

updateProducto(id: string|number, updateProducto: Productos): Observable<Productos>{
  return this.http.put(`${this.API_URI}/productos/${id}`, updateProducto);
}
getPdf(){
  return this.http.get(`${this.API_URI}/productos/lista/l`)
}

}
