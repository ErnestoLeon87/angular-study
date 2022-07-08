import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TareaService } from '../core/tareas.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tarea-dialog',
  templateUrl: './tarea-dialog.component.html',
  styleUrls: ['./tarea-dialog.component.scss']
})

export class TareaDialogComponent implements OnInit {

  public formTarea!: FormGroup;

  constructor(private formBuild: FormBuilder,
    private tareaSvc: TareaService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.formTarea = this.formBuild.group({
      titulo: ['', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[a-zA-Z 0-9.]+$/)]],
      description: ['', Validators.maxLength(250)]

    });
  }

  send(): void {
    this.tareaSvc.addTarea$(this.formTarea.value).subscribe(
      {
        next: dat => { this._snackBar.open(dat.titulo, "Se a añadido...", { duration: 2000 }) },
        error: err => this._snackBar.open(err, "close"),
        complete: () => this.formTarea.reset({ titulo: '', description: '' })
      }
    );
  }

}
