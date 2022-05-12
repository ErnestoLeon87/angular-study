import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Tarea } from './tarea.interface';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  urlTareas='http://localhost:9000/api/tareas';
  private tareaBehSub = new BehaviorSubject<any>(null);
  tarea$!: Observable<Tarea>;

  constructor(private http: HttpClient) {
    this.tarea$ = this.tareaBehSub.asObservable();
  }

  getTarea$(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.urlTareas);
  }
  private act_tareaBehSub():void{
    this.tareaBehSub.next(this.getTarea$);
  }
}
