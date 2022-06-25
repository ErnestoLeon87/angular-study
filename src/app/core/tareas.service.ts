import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Tarea } from './tarea.interface';
import { HttpClient } from '@angular/common/http';
import { TareaStatus } from './tarea-status.enum';

@Injectable({
  providedIn: 'root',
})
export class TareaService {
  private url = 'http://localhost:9000/api';
  private postUrl = 'http://localhost:9000/api/tarea';
  public tareas$: Observable<Tarea[]>;
  private tareaBehSub = new BehaviorSubject<Tarea[]>([]);

  constructor(private http: HttpClient) {
    this.tareas$ = this.tareaBehSub.asObservable();
    this.getTareas$().subscribe();

  }
  public getTareas$(): Observable<Tarea[]> {
    const urlGetTareas = this.url + '/tareas';
    return this.http
      .get<Tarea[]>(urlGetTareas)
      .pipe(tap((tareas: Tarea[]) => this.tareaBehSub.next(tareas)));
  }
  public addTarea(tarea: Tarea): Observable<Tarea> {
    tarea.status = TareaStatus.PENDIENTE;
    return this.http.post<Tarea>(this.postUrl, tarea);
  }
}
