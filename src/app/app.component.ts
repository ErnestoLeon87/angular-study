import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<ng-container>
                    <p>5-Limpiar-app.component </p>
                    <router-outlet></router-outlet>
             </ng-container> `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-study';
}
