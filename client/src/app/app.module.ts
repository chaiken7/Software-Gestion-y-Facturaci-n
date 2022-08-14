import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {NgxPaginationModule} from 'ngx-pagination'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductoFormComponent } from './components/productos/producto-form/producto-form.component';
import { ProductosListComponent } from './components/productos/productos-list/productos-list.component';
import { ProductosPreciosComponent } from './components/productos/productos-precios/productos-precios.component';

import { ProductosService } from './services/productos/productos.service';
import { FiltroBusquedaPipe } from './pipes/form-product/filtro-busqueda.pipe';
import { PresupuestosListComponent } from './components/presupuestos/presupuestos-list/presupuestos-list.component';
import { DetallePresupuestoComponent } from './components/presupuestos/detalle-presupuesto/detalle-presupuesto.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateFormComponent } from './components/productos/update-form/update-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductoFormComponent,
    ProductosListComponent,
    ProductosPreciosComponent,
    FiltroBusquedaPipe,
    PresupuestosListComponent,
    DetallePresupuestoComponent,
    HomeComponent,
    UpdateFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatPaginatorModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
