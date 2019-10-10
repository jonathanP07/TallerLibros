import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Libro } from '../models/libro';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const libros = [

      { id: 1, title: 'Nice', valor:1000, popular:false},
      { id: 2, title: 'The Torment', valor:1500, popular:false},
      { id: 3, title: 'Match', valor:2000, popular:true},
      { id: 4, title: 'The True', valor:3000, popular:true}
    ];
    return {libros};

  }
  genId(libros: Libro[]): number {
    return libros.length > 0 ? Math.max(...libros.map(libro => libro.id)) + 1 : 1;
  }

}
