import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Tarea } from '../core/tarea.interface'
import { TareaDeleteDialogComponent } from '../tarea-delete-dialog/tarea-delete-dialog.component';
import { TareaDialogComponent } from '../tarea-dialog/tarea-dialog.component';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent implements OnInit {
  @Input()
  tarea!: Tarea;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { }

  editTarea(tareaEdit: Tarea): void {
    this.dialog.open(TareaDialogComponent, { data: tareaEdit });
  }

  deleteTarea(TareaDelete:Tarea):void{
    this.dialog.open(TareaDeleteDialogComponent,{ data:TareaDelete });
  }
}
