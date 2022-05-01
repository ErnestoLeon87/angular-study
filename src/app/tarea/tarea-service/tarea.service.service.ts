import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Tarea } from '../tarea-interface/tarea.interface';

@Injectable({
  providedIn: 'root'
})
export class TareaServiceService {
 
  private tareaBehSub=new BehaviorSubject<Tarea[]>([]);

  constructor() { }
  
  getTarea$():Observable<Tarea[]>{
    return this.tareaBehSub.asObservable();
  }
}
