import { Component, OnInit } from '@angular/core';
import { Libro } from '../models/libro';
import { LibroDataService } from '../services/libro-data.service';

@Component({
  selector: 'app-registrar-libro',
  templateUrl: './registrar-libro.component.html',
  styleUrls: ['./registrar-libro.component.css']
})
export class RegistrarLibroComponent implements OnInit {
  libro: Libro;
  libros:Libro[];
  constructor(private libroDataService: LibroDataService) { }
  ngOnInit() {
    this.libro = new Libro();
  }

  add(): void {
    if (!this.libro) { return; }
    this.libroDataService.addlibro(this.libro)
      .subscribe( libro  => {
          alert('Se agrego un nuevo libro =>'+libro.id);
             });
  }

/*   delete(task: Task): void {
    this.tasks = this.tasks.filter(h => h !== task);
    this.taskDataService.deleteTask(task).subscribe();
  } */


}
