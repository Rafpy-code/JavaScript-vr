export class Zapatilla {
  
    public nombre:string;
    public precio:number;
    public marca:string;
    public color:string;
    public existencia:boolean;

    constructor(nombre: string, precio: number, marca: string, color: string, existencia: boolean) {
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
        this.color = color;
        this.existencia = existencia;
    }
}