import { Component, HostBinding, OnInit } from '@angular/core';
import {PresupuestosService} from '../../../services/presupuestos/presupuestos.service';
import { Presupuestos } from '../../../models/presupuestos';

@Component({
  selector: 'app-presupuestos-list',
  templateUrl: './presupuestos-list.component.html',
  styleUrls: ['./presupuestos-list.component.css']
})
export class PresupuestosListComponent implements OnInit {
  presupuestos: any = [];

  @HostBinding('class') clases = 'row';

  presupuesto: Presupuestos = {
    id: 0,
    nombre: '',
    apellido: '',
    telefono: 0
  };
  constructor(private presupuestoService: PresupuestosService) { }

  ngOnInit(): void {
    this.presupuestoService.getPresupuestos().subscribe(
      res => {
        this.presupuestos = res;
      },
      err => console.error(err)
    )
    }

    guardarNewPresupuesto() {

      this.presupuestoService.savePresupuesto(this.presupuesto)
      .subscribe(
        res => {
          console.log(res);
          this.ngOnInit();
        },
        err => console.error(err)
      )
    }

    deletePresupuesto(id: string) {
      this.presupuestoService.deletePresupuesto(id)
        .subscribe(
          res => {
            console.log(res);
            this.ngOnInit();
          },
          err => console.error(err)
        )
    }
}
