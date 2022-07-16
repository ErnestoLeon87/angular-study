import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TareaService } from '../core/tareas.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SpinnerService } from '../core/spinner-service/spinner.service';
import { finalize } from 'rxjs';


@Component({
  selector: 'app-tarea-dialog',
  templateUrl: './tarea-dialog.component.html',
  styleUrls: ['./tarea-dialog.component.scss']
})

export class TareaDialogComponent implements OnInit {

  public formTarea!: FormGroup;

  constructor(private formBuild: FormBuilder,
    private tareaSvc: TareaService,
    private _snackBar: MatSnackBar,
    private spinner: SpinnerService) { }

  ngOnInit(): void {
    this.formTarea = this.formBuild.group({
      titulo: ['', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[a-zA-Z 0-9.]+$/)]],
      description: ['', Validators.maxLength(250)]

    });
  }

  send(): void {
    this.spinner.activeSpinner();
    this.tareaSvc.addTarea$(this.formTarea.value).pipe(
      finalize(() => this.spinner.desactiveSpinner())
    ).subscribe({
      next: dat => this._snackBar.open(dat.titulo, "se a añadido...", { duration: 2000 }),
      error: err => this._snackBar.open(err, "", { duration: 2000 }),
      complete: () => this.formTarea.reset({ titulo: '', description: '' })

    });
  }
}