import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarLibroComponent } from './registrar-libro/registrar-libro.component';
import { ListarLibroComponent } from './listar-libro/listar-libro.component';


import { FormsModule } from '@angular/forms';

import{ LibroDataService } from './services/libro-data.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarLibroComponent,
    ListarLibroComponent
  ],
  imports: [
    FormsModule,    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }
)
    
  ],
  providers: [LibroDataService, InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
