import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroBusqueda'
})
export class FiltroBusquedaPipe implements PipeTransform {

  transform(value: any, arg: any): any {

    const result = [];
    
    for(const producto of value){
      if(producto.nombre.indexOf(arg)> -1){
        result.push(producto)
      };
    };
    return result;
  }

}
