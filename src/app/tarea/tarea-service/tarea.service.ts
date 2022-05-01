import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Tarea } from '../tarea-interface/tarea.interface';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
 
  private tareaBehSub=new BehaviorSubject<any>(null);

  constructor() { }
  
  getTarea$():Observable<Tarea[]>{
    return this.tareaBehSub.asObservable();
  }
}
