import { Component, OnInit } from '@angular/core';
import { filter, Observable, map, tap } from 'rxjs';
import { Tarea } from '../core/tarea.interface';
import { TareaService } from '../core/tareas.service';

@Component({
  selector: 'app-pizarra',
  templateUrl: './pizarra.component.html',
  styleUrls: ['./pizarra.component.scss']
})
export class PizarraComponent implements OnInit {
  tareas$!: Observable<Tarea[]>;
  tareasPendientes$!: Observable<Tarea[]>;
  tareasEnProceso$!: Observable<Tarea[]>;
  tareasTerminadas$!: Observable<Tarea[]>;

  constructor(private tareasSvc: TareaService) { }

  ngOnInit(): void {
    this.tareas$ = this.tareasSvc.getTareas$();

    this.tareasPendientes$ = this.tareas$
      .pipe(map(val => val.filter(dat => dat.status === 'PENDIENTE')));

    this.tareasEnProceso$ = this.tareas$
      .pipe(map(val => val.filter(dat => dat.status === 'EN_PROCESO')));

    this.tareasTerminadas$ = this.tareas$
      .pipe(map(val => val.filter(dat => dat.status === 'TERMINADA')));
  }

}


