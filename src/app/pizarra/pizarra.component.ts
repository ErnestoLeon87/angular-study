import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { TareaStatus } from '../core/tarea-status.enum';
import { Tarea } from '../core/tarea.interface';
import { TareaService } from '../core/tareas.service';

@Component({
  selector: 'app-pizarra',
  templateUrl: './pizarra.component.html',
  styleUrls: ['./pizarra.component.scss']
})

export class PizarraComponent implements OnInit {
  tareas$?: Observable<Tarea[]>;
  tareasPendientes$?: Observable<Tarea[]>;
  tareasEnProceso$?: Observable<Tarea[]>;
  tareasTerminadas$?: Observable<Tarea[]>;

  constructor(private tareasService: TareaService) { }

  ngOnInit(): void {

    this.filtrarTareas();

  }
  private filtrarTareas(): void {

    this.tareas$ = this.tareasService.getTareas$();

    this.tareasPendientes$ = this.tareas$
      .pipe(map(val => val.filter(dat => dat.status === TareaStatus.PENDIENTE)));

    this.tareasEnProceso$ = this.tareas$
      .pipe(map(val => val.filter(dat => dat.status === TareaStatus.EN_PROCESO)));

    this.tareasTerminadas$ = this.tareas$
      .pipe(map(val => val.filter(dat => dat.status === TareaStatus.TERMINADA)));

  }

}


