import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Tarea } from './tarea.interface';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  urlTareas = 'http://localhost:9000/api/tareas';
  private tareaBehSub = new BehaviorSubject<Tarea[]>([]);
  tareas$!: Observable<Tarea[]>;

  constructor(private http: HttpClient) {
    this.tareas$ = this.tareaBehSub.asObservable();
  }

  getTareas$(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.urlTareas);
  }
 
}
