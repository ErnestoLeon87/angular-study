import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { Tarea } from './tarea.interface';
import { HttpClient } from '@angular/common/http';
import { TareaStatus } from './tarea-status.enum';

@Injectable({
  providedIn: 'root',
})
export class TareaService {
  private url = 'http://localhost:9000/api';
  private postUrl = 'http://localhost:9000/api/tarea';//porque no poner la url completa asi? y nos ahorramos la variable del metodo.?
  public tareas$: Observable<Tarea[]>;
  private tareaBehSub = new BehaviorSubject<Tarea[]>([]);
  tareasArrary: Tarea[] = [];

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
    tarea.status = TareaStatus.PENDIENTE;
    this.tareasArrary = this.tareaBehSub.getValue();
    return this.http.post<Tarea>(this.postUrl, tarea).pipe(
      catchError(err =>{throw new Error("Proceso invalido, problemas con la API-Tareas.");
      }
      ),
      tap(dat => {
        this.tareasArrary.push(dat);
        this.tareaBehSub.next(this.tareasArrary)
      })
    );
  }


}
