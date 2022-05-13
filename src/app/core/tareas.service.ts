import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Tarea } from './tarea.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TareaService {
  public tareas$: Observable<Tarea[]>;
  private url = 'http://localhost:9000/api';
  private tareaBehSub = new BehaviorSubject<Tarea[]>([]);

  constructor(private http: HttpClient) {
    this.tareas$ = this.tareaBehSub.asObservable();
  }

  getTareas$(): Observable<Tarea[]> {
    const urlGetTareas = this.url + '/tareas';
    return this.http
      .get<Tarea[]>(urlGetTareas)
      .pipe(tap((tareas: Tarea[]) => this.tareaBehSub.next(tareas)));
  }
}
