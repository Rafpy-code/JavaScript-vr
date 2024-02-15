import { Component } from '@angular/core';
import { ContactoUsuario } from '../models/contactousuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  public contactoUsuario: ContactoUsuario;
  public show_data:any;

  constructor(){
    this.contactoUsuario = new ContactoUsuario('','','','');
  }

  onSubmit(form: { reset: () => void; }) {
    this.show_data = this.contactoUsuario;
    //console.log('submit hecho');
    console.log(this.contactoUsuario);
    form.reset();
  }
}
