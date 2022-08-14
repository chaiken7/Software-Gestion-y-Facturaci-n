import { Component, OnInit, HostBinding } from '@angular/core';
import {DetallePresupuestoService} from '../../../services/detallePresupuesto/detalle-presupuesto.service';
import {ProductosService} from '../../../services/productos/productos.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DetallePresupuesto } from '../../../models/detallePresupuesto';
import {Productos} from '../../../models/producto';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-detalle-presupuesto',
  templateUrl: './detalle-presupuesto.component.html',
  styleUrls: ['./detalle-presupuesto.component.css']
})
export class DetallePresupuestoComponent implements OnInit {
 test = new FormControl('');
 @HostBinding('class') clases = 'row';

  constructor(private ppService: DetallePresupuestoService, private productosService: ProductosService, private activatedRoute: ActivatedRoute, private route: Router) { }
  pps!: DetallePresupuesto[];
  productos: any = [];
  id!:any;
  pP: DetallePresupuesto = {
    idDetalle: 0,
    idPresupuesto: 0,
    idProducto: 0,
    cantidad: 0,
    nombreProducto:'',
    precio: 0
  };
  

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe (params=> {
      if (params.has("id")){
        this.ppService.getProductoPresupuesto(params.get("id") as string).subscribe(pps => this.pps = pps);
      } else {
        console.log('Error');
      }
    })

    this.getProductos();

    this.getId();

  }

  getProductos(): void {
    this.productosService.getProductos().subscribe(
      res => {
        this.productos = res;
        console.log(this.productos);
      },
      err => console.error(err)
    );
    }

    getId(){
      let id = this.activatedRoute.snapshot.paramMap.get('id');
      this.id = id;
    }

    savepP(event:Event){
      this.pP = {
        idPresupuesto: this.id,
        idProducto: this.test.value['id'],
        cantidad: this.pP.cantidad,
        nombreProducto: this.test.value['nombre'],
        precio: this.test.value['precio']
      }
      event?.preventDefault();
      this.ppService.postProductoPresupuesto(this.pP)
      .subscribe(
        res => {
          console.log(res);
          this.ngOnInit();
        },
        err => console.log(err)
        );
    }

    deleteDetalle(idDetalle: string) {
      this.ppService.deleteDetalle(idDetalle)
        .subscribe(
          res => {
            console.log(res);
            this.ngOnInit();
          },
          err => console.error(err)
        )
    }
  }
