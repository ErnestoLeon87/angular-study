import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpinnerService } from './core/spinner-service/spinner.service';


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-study';
  spinner$!:Observable<boolean>;

  constructor(private spinner:SpinnerService) {
    this.spinner$=spinner.spinner$;
   }

}
