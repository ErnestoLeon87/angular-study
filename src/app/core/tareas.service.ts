import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';
import { Tarea } from './tarea.interface';
import { HttpClient } from '@angular/common/http';
import { TareaStatus } from './tarea-status.enum';

@Injectable({
  providedIn: 'root',
})
export class TareaService {
  private url = 'http://localhost:9000/api';
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
      .pipe(tap((tareas: Tarea[]) => {
        this.tareaBehSub.next(tareas);
      }));
  }

  public addTarea$(tarea: Tarea): Observable<Tarea> {
    const urlPostTarea = this.url + '/tarea';
    var tareasArrary: Tarea[] = this.tareaBehSub.getValue();
    tarea.status = TareaStatus.PENDIENTE;
    return this.http.post<Tarea>(urlPostTarea, tarea).pipe(
      catchError(err => { throw new Error("Proceso invalido, problemas con la API-Tareas.") }),
      tap((tarea: Tarea) => {
        tareasArrary.push(tarea);
        this.tareaBehSub.next(tareasArrary)
      })
    );
  }


}
