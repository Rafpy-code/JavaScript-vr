import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'calculadora'
})

export class CalculadoraPipe implements PipeTransform {
  transform(value1: any,value2: any) {
    let operaciones = `
      suma: ${value1+value2};
      resta: ${value1-value2};
      multiplicación: ${value1*value2};
      división: ${value1/value2};
    `
    return operaciones;
  }
}
