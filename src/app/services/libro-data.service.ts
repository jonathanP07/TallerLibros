import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LibroDataService {


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private libroUrl = 'api/libros';  // URL to web api
  constructor( private http: HttpClient ) { }

  addlibro(libro: Libro): Observable<Libro> {
    return this.http.post<Libro>(this.libroUrl, libro,  this.httpOptions).pipe(
      tap((newLibro: Libro) => this.log(`Se registro la informacion del libro con id=${newLibro.id}`)),
      catchError(this.handleError<Libro>('addLibro'))
      );
  }

  /* GET heroes whose name contains search term */
searchLibro(id: number): Observable<Libro> {
  if (!id) {
    // if not search term, return empty hero array.
    return of();
  }
  return this.http.get<Libro>(`${this.libroUrl}/${id}`).pipe(
    tap(_ => this.log(`Se encontro el libro ${id}`)),
    catchError(this.handleError<Libro>(`searchLibro id=${id}`))
  );
}


  getLibro(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.libroUrl).pipe(
      tap(libros => {
        return this.log('Consulta de Libros');
      }),
      catchError(this.handleError<Libro[]>('getLibro', [])));
  }



  private log(message: string) {
   // this.messageService.add(`taskService: ${message}`);
   alert(`libroService: ${message}`);
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
        // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
        // TODO: better job of transforming error for user consumption
      this.log(`${operation} Fallo: ${error.message}`);
        // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
