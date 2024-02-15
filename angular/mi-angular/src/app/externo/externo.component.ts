import { Component } from '@angular/core';
//import { NgForm } from '@angular/forms';
import { PeticionesService } from '../services/peticiones.service';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: [
    './externo.component.css',
  ],
  providers: [PeticionesService]
})

export class ExternoComponent {

  public user: any;
  public userId: number;
  public fecha: any;
  public new_user: any;
  public user_created: any;

  constructor(private _peticionesService: PeticionesService) {
    this.userId = 1;
    this.new_user = {
      "name": '',
      "job": ''
    };
  }

  ngOnInit() {
    this.peticionUsuario();
    this.fecha = new Date;
  }
  /*
    peticionUsuario() {
      this._peticionesService.getUser(this.userId)
      .subscribe((result: any): void => {
          this.user = result.data;
          //console.log(result);
        },
        error => {
          console.log(<any>error);
        }
      );
    }
  */
  peticionUsuario(): void {
    this._peticionesService.getUser(this.userId)
      .subscribe({
        next: (result: { data: any; }) => this.user = result.data,
        error: (e: any): void => console.error(e),
        complete: () => console.info('complete')
        });
  }

  //Para crear new_user
  onSubmit(form: any): void {
    this._peticionesService.addUser(this.new_user).subscribe(
      response => {
        //alert(response);
        this.user_created = response;
        console.log(response)
        form.reset();
      },
      error => {
        alert(<any>error);
      }
    );
  }
}
