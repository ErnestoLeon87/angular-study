import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private loadingBehSub= new BehaviorSubject<boolean>(false);
  spinner$!:Observable<boolean>;

  constructor() {
    this.spinner$=this.loadingBehSub.asObservable();
   }

  activeSpinner():void{
    this.loadingBehSub.next(true);
  }

  desactiveSpinner():void{
    this.loadingBehSub.next(false);
  }

}
