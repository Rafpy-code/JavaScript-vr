import { Component, OnInit } from "@angular/core";
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from "../services/zapatilla.service";

@Component({
  selector: 'zapatillas',
  templateUrl: 'zapatillas.component.html',
  styleUrls: ['zapatillas.component.css'],
  providers: [ZapatillaService]
})

export class ZapatillasComponent implements OnInit {

  public titulo: string = 'zapatillas.component.ts';
  public zapatillas: Array<Zapatilla>;
  public marcas: String[] = [];
  public color: String;
  public nueva_marca:string;
  purple: any;
  white: any;
  red: any;
  pink: any;

  constructor(private _zapatillaService:ZapatillaService) {
    this.zapatillas = this._zapatillaService.getZapatillas();
    this.color = 'pink'; //Cambiar aquí para mostrar el color mas solicitado.
    this.nueva_marca = 'New Balance';
    this.marcas = new Array;
  }

  ngOnInit(): void {
    //this.zapatillas = this._zapatillaService.getZapatillas();
    alert(this._zapatillaService.getTexto());
    this.getMarcas();
  }

  getMarca() {
    alert(this.nueva_marca);
  }

  addMarca() {
    this.marcas.push(this.nueva_marca);
  }

  deleteMarca(index: number) {
    // delete this.marcas[index];
    this.marcas.splice(index, 1); // Borra el índice y la cantidad de elementos señalados
  }

  getMarcas() {
    this.zapatillas.forEach((zapatilla, index) => {
      if (this.marcas.indexOf(zapatilla.marca) < 0) {
        this.marcas.push(zapatilla.marca);
      }
    });
    console.log(this.marcas);
  }

  onBlur() {
    alert('Has salido del input...')
    }

  mostrarPalabra() {
    alert('Has presionado enter, has escrito: '+ this.nueva_marca)
  }
}
