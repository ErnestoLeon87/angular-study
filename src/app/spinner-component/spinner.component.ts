import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpinnerService } from '../core/spinner-service/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  spinner$:Observable<boolean>;
 
  constructor(private spinner:SpinnerService) { 
 
    this.spinner$=spinner.spinner$;
  }

  ngOnInit(): void {
   
  }

}
