import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductosListComponent } from './components/productos/productos-list/productos-list.component';
import { ProductoFormComponent } from './components/productos/producto-form/producto-form.component';
import { PresupuestosListComponent } from './components/presupuestos/presupuestos-list/presupuestos-list.component';
import { DetallePresupuestoComponent } from './components/presupuestos/detalle-presupuesto/detalle-presupuesto.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateFormComponent } from './components/productos/update-form/update-form.component';

const routes: Routes = [
 
  {
    path: 'productos',
    component: ProductosListComponent
  },
  {
    path: 'productos/add',
    component: ProductoFormComponent
  },
  {
    path: 'productos/edit/:id',
    component: ProductoFormComponent
  },
  {
  path: 'presupuestos',
  component: PresupuestosListComponent
  },
  {
    path: 'presupuestos/:id',
    component: DetallePresupuestoComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
