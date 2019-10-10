import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarLibroComponent } from './registrar-libro/registrar-libro.component';
import { ListarLibroComponent } from './listar-libro/listar-libro.component';



const routes: Routes = [
  {path:'registrarLibro', component:RegistrarLibroComponent},
  {path:'listarLibro', component:ListarLibroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
