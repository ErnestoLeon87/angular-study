import { Component } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  template:`<p>
       <mat-toolbar color="primary">
                   <span>Gestor de tareas</span>
                   <span class="example-spacer"></span>
                   <div class="btn"><samp><button>Crear Tablas</button></samp></div>
                   <div class="btn"><samp><button>Lista de Tareas</button></samp></div>
          </mat-toolbar> 
       </p>`,
  styleUrls: ['./navegacion.component.scss']
 
})
export class NavegacionComponent   {}
