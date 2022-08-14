import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Productos } from 'src/app/models/producto';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductosService } from '../../../services/productos/productos.service';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  productos : Productos = {
    id: 0,
    nombre: '',
    categoria: '',
    descripcion: '',
    precio: 0
  };

  edit: boolean = false;

  constructor(private productosService: ProductosService, private sanitizer: DomSanitizer, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   const params = this.activatedRoute.snapshot.params;
   if (params['id']) {
    this.productosService.getProducto(params['id'])
      .subscribe(
       res => {
       console.log(res);
       this.productos = res;
       this.edit = true;
        },
        err => console.error(err)
      )
    }
  }

  guardarNuevoProducto(){
    this.productosService.saveProducto(this.productos)
    .subscribe(
      res=> {
        console.log(res);
        this.router.navigate(['/productos'])
      },
      err => console.error(err)
    )
  }

  updateProducto(){
    this.productosService.updateProducto(this.productos.id, this.productos)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/productos'])
      },
      err => {
        console.log(err)
      }
    )
    }

}
