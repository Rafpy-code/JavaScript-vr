import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public identificado: boolean = false;

  setIdentificado() {
    this.identificado = true
  }

  unSetIdentificado() {
    this.identificado = false;
  }
}
