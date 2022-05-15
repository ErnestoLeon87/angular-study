import { Component, OnInit } from '@angular/core';
import { filter, Observable, Subject, map, tap, Subscription } from 'rxjs';
import { Tarea } from '../core/tarea.interface';
import { TareaService } from '../core/tareas.service';

@Component({
  selector: 'app-pizarra',
  templateUrl: './pizarra.component.html',
  styleUrls: ['./pizarra.component.scss']
})
export class PizarraComponent implements OnInit {

  tareasPendientes$!: Observable<Tarea[]>;
  tareasPendientes!: Tarea[];

  tareasEnProceso$!: Observable<Tarea[]>;
  tareasEnProceso!: Tarea[];

  tareasTerminadas$!: Observable<Tarea[]>;
  tareasTerminadas!: Tarea[];

  constructor(private tareasSvc: TareaService) { }

  ngOnInit(): void {

    this.tareasPendientes$ = this.tareasSvc.getTareas$()
      .pipe(
        map((tareas) => tareas.filter(tarea => tarea.status.match('PENDIENTE')))
      );

    this.tareasEnProceso$ = this.tareasSvc.getTareas$().pipe(
      map((tareas) => tareas.filter(tarea => tarea.status.match('EN_PROCESO')))
    );

    this.tareasTerminadas$ = this.tareasSvc.getTareas$().pipe(
      map((tareas) => tareas.filter(tarea => tarea.status.match('TERMINADA')))
    );



    this.tareasPendientes$.pipe(
      tap((tareas: Tarea[]) => this.tareasPendientes = tareas)
    ).subscribe();

    this.tareasEnProceso$.pipe(
      tap((tareas: Tarea[]) => this.tareasEnProceso = tareas)
    ).subscribe();

    this.tareasTerminadas$.pipe(
      tap((tareas: Tarea[]) => this.tareasTerminadas = tareas)
    ).subscribe();
  }

}


