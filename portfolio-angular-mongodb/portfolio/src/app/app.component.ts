import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mostrarMenu() {
    console.log("Mostrando el Menú");
    const enlace = document.getElementsByClassName('nav-enlace');
    for(let i = 0; i < enlace.length; i++) {
        enlace[i].classList.toggle('ocultar');
        console.log(enlace[i]);
    }
}
}
