import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Tarea } from 'server/tarea.interface';
import { TareaService } from '../core/tareas.service';

import { TareaComponent } from './tarea.component';

describe('TareaComponent', () => {
  let component: TareaComponent;
  let fixture: ComponentFixture<TareaComponent>;
  let tareaService: TareaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TareaComponent],
      providers: [MatDialog],
      imports: [MatDialogModule, HttpClientTestingModule, MatSnackBarModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaComponent);
    component = fixture.componentInstance;
    tareaService = TestBed.inject(TareaService);
    component.tarea = { titulo: 'Test Titulo' } as Tarea;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
