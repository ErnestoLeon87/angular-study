import { Component, OnInit, Input} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Tarea } from '../core/tarea.interface'
import { TareaDialogComponent } from '../tarea-dialog/tarea-dialog.component';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent implements OnInit {
  @Input() 
  tarea!:Tarea;
  
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  editTarea():void{
    const dialogRef=this.dialog.open(TareaDialogComponent,
      {
        data:{id:this.tarea.id, titulo:this.tarea.titulo, description:this.tarea.description,status:this.tarea.status},
      });
  
  }

}
