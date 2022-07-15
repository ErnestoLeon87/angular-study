import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TareaService } from '../core/tareas.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SpinnerService } from '../core/spinner-service/spinner.service';
import { Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'app-tarea-dialog',
  templateUrl: './tarea-dialog.component.html',
  styleUrls: ['./tarea-dialog.component.scss']
})

export class TareaDialogComponent implements OnInit, OnDestroy {

  public formTarea!: FormGroup;
  onDestroy$: Subject<boolean> = new Subject();

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

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
  }
  
  send(): void {
    this.spinner.activeSpinner();
    this.tareaSvc.addTarea$(this.formTarea.value).pipe(
      takeUntil(this.onDestroy$)
    ).subscribe(
      {
        next: dat => {
          this.spinner.desactiveSpinner();
          this._snackBar.open(dat.titulo, "Se a añadido...", { duration: 2000 });
        },
        error: err => {
          this.spinner.desactiveSpinner();
          this._snackBar.open(err, "", { duration: 2000 });
        },
        complete: () => this.formTarea.reset({ titulo: '', description: '' })
      }
    );
  }

}
