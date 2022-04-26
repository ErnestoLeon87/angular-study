import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<mat-toolbar color="primary">
                    <span>Material</span>
                    <router-outlet></router-outlet>
             </mat-toolbar> `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-study';
}
