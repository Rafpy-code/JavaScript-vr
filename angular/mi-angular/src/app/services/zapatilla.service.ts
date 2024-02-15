import { Injectable } from "@angular/core";
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService {
  public zapatillas: Array<Zapatilla>;

  constructor() {
    this.zapatillas = [
      new Zapatilla('Reebook Clasic', 65, 'Reebook', 'black', true),
      new Zapatilla('Galactic', 175, 'New Balance', 'red', false),
      new Zapatilla('Nike Runner', 98.4, 'Nike', 'white', true),
      new Zapatilla('Puma Garra', 198.4, 'Puma', 'pink', true)
    ];
  }

  getTexto(){
    return 'Hola desde ZapatillaService'
  }

  getZapatillas() {
    return this.zapatillas;
  }
}
