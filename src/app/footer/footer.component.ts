import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template:`<div class="footer">
    <p>
       <mat-toolbar color="primary">
                   <span class="example-spacer"></span>
                   <samp class="smp">Total de Tareas: 4</samp>
        </mat-toolbar> 
       </p>
  </div>`,
  styleUrls: ['./footer.component.scss']
 
})
export class FooterComponent   {}