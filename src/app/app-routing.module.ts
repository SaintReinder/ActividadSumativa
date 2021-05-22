import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from '../app/components/inicio/inicio.component';
import {VernotasComponent} from "../app/components/vernotas/vernotas.component";


const routes: Routes = [
  { path: '', component:InicioComponent},
  {path: 'Vernotas', component:VernotasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
