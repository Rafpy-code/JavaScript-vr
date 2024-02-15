import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector:'videojuego',
  templateUrl: './videojuego.component.html'
})

// Al crear un nuevo componente NO ME IMPLEMENTA EL OnInit automaticamente???
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string;
  public listado: string;
  public mostrar_lista_juegos: boolean;

  constructor() {
    this.titulo = 'PÁGINA => videojuego.component.ts';
    this.listado = 'Mis mejores juegos!';
    this.mostrar_lista_juegos  = true;
  }

  ngOnInit(): void {
    console.log('OnInit ejecutándose...');
  }

  ngDoCheck(): void {
    console.log('DoCheck ejecutado...');
  }

  ngOnDestroy(): void {
    console.log('OnDestroy ejecutado al ocultar la lista de Videojuegos');
  }

  cambiarTitulo(): void {
    this.titulo = 'Título cambiado con la función: cambiaTitulo()';
  }

  ocultarMostrarLista(value: boolean): void {
    this.mostrar_lista_juegos = value;
  }
}
