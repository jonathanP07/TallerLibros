import { Component, OnInit } from '@angular/core';
import { Libro } from '../models/libro';
import { LibroDataService } from '../services/libro-data.service';

@Component({
  selector: 'app-listar-libro',
  templateUrl: './listar-libro.component.html',
  styleUrls: ['./listar-libro.component.css']
})
export class ListarLibroComponent implements OnInit {
  libros: Libro[];
  constructor(private libroDataService: LibroDataService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.libroDataService.getLibro().subscribe(libros => {
      return this.libros = libros;
    });
    }
}

