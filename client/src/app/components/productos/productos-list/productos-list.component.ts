import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { ProductosService } from '../../../services/productos/productos.service';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css']
})
export class ProductosListComponent implements OnInit {

  productos: any = [];
  public page: number = 0;
  filterPost = '';
  mensaje: any = [];

  constructor(private productoService: ProductosService) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    this.productoService.getProductos().subscribe(
      res => {
        this.productos = res;
      },
      err => console.error(err)
    );
  }

  deleteProducto(id: string) {
    this.productoService.deleteProducto(id).subscribe(
      res => {
        console.log(res);
        this.getProductos();
      },
      err => console.log(err)
    )
  }

  createPdf(){
    const pdfDefinition: any = {
      content: [
        {
          text: 'Hola Mundo'
        }
      ]
    }
    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();
  }
}
