import { Component } from '@angular/core';
declare var $ : any;
//INSTALAR npm install jquery despues npm install --save @types/jquery incluir en el angular.json el "node_modules/jquery/dist/jquery.min.js" y app.module.ts hacer el import import * as $ from 'jquery' y declarar declare var $ : any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{
  
  constructor() {
   }

   ngOnInit() {

   }
}
