import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TareaDialogComponent } from '../tarea-dialog/tarea-dialog.component';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss'],
})
export class NavegacionComponent {
  constructor(public dialog: MatDialog) {}

  crearTarea(): void {
    const dialogRef = this.dialog.open(TareaDialogComponent);
  }
}
