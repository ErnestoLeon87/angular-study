import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Tarea } from '../core/tarea.interface';
import { TareaService } from '../core/tareas.service';
//renombra este componente a DeleteConfirmationDialog
@Component({
  selector: 'app-tarea-delete-dialog',
  templateUrl: './tarea-delete-dialog.component.html',
  styleUrls: ['./tarea-delete-dialog.component.scss']
})
export class TareaDeleteDialogComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,
    public dialogRef:MatDialogRef<TareaDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public tareaDelete: Tarea
    ) { }

  ngOnInit(): void { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
