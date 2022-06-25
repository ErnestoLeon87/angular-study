import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tarea } from 'server/tarea.interface';
import { TareaService } from '../core/tareas.service';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from "@angular/material/dialog";



@Component({
  selector: 'app-tarea-dialog',
  templateUrl: './tarea-dialog.component.html',
  styleUrls: ['./tarea-dialog.component.scss']
})
export class TareaDialogComponent implements OnInit {

  public formTarea!: FormGroup;
  tarea!: Tarea;


  constructor(private formBuild: FormBuilder,
    private tareaSvc: TareaService,
    private route: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.formTarea = this.formBuild.group({
      titulo: ['', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[a-zA-Z 0-9.]+$/)]],
      description: ['', Validators.maxLength(250)]

    });
  }
  send() {
    this.tareaSvc.addTarea(this.formTarea.value)
      .pipe(
        tap(dat => console.log('Tarea-Agregada:', dat)),
        tap(() => {
          this.route.navigate(['listar_tareas']);
          const dialogRef = this.dialog.closeAll();
        })
      )
      .subscribe();
  }

}
