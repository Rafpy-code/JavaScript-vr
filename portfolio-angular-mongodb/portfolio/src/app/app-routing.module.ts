import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateComponent } from './components/create/create.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DetailComponent } from './components/detail/detail.component';
import { ErrorComponent } from './components/error/error.component';
import { EditComponent } from './components/edit/edit.component';


const appRoutes: Routes = [
  {path: '', component:AboutComponent},
  {path: 'contacto', component:ContactComponent},
  {path: 'crear-proyecto', component:CreateComponent},
  {path: 'editar-proyecto/:id', component:EditComponent},
  {path: 'proyecto/:id', component: DetailComponent},
  {path: 'proyectos', component:ProjectsComponent},
  {path: 'sobre-mi', component:AboutComponent},
  {path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRoutingProviders: any[] = [];

