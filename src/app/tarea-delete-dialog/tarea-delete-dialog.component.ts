import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Tarea } from '../core/tarea.interface';
import { TareaService } from '../core/tareas.service';

@Component({
  selector: 'app-tarea-delete-dialog',
  templateUrl: './tarea-delete-dialog.component.html',
  styleUrls: ['./tarea-delete-dialog.component.scss']
})
export class TareaDeleteDialogComponent implements OnInit {

  constructor(private tareaSvc: TareaService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public tareaDelete: Tarea
    ) { }

  ngOnInit(): void { }

  deleteTarea(idTarea:number): void {
   this.tareaSvc.deleteTarea(idTarea).subscribe({
      next: dat=> this._snackBar.open('Task '+dat.titulo+' deleted successfully.', '', { duration: 2000 }),
      error: err => this._snackBar.open(err, "", { duration: 2000 })
    });

  }

}
