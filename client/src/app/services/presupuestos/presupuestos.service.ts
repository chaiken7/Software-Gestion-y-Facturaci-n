import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Presupuestos } from '../../models/presupuestos';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getPresupuestos(): Observable<Presupuestos[]>{
    return this.http.get<Presupuestos[]>(`${this.API_URI}/presupuestos`)
  }

  savePresupuesto(presupuesto: Presupuestos){
    return this.http.post(`${this.API_URI}/presupuestos`, presupuesto);
  }

  deletePresupuesto(id: string) {
    return this.http.delete(`${this.API_URI}/presupuestos/delete/${id}`);
  }
}

