import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { DetallePresupuesto } from '../../models/detallePresupuesto';

@Injectable({
  providedIn: 'root'
})
export class DetallePresupuestoService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getProductoPresupuesto(id: string): Observable<DetallePresupuesto[]>{
    const url = `${this.API_URI}/presupuestos/dp/${id}`;
    return this.http.get<DetallePresupuesto[]>(url);
   }
 
   postProductoPresupuesto(detallePresupuesto: DetallePresupuesto){
     return this.http.post(`${this.API_URI}/presupuestos/dp/pp`, detallePresupuesto);
   }

   deleteDetalle(id: string) {
    return this.http.delete(`${this.API_URI}/presupuestos/dp/delete/${id}`);
  }
}
