import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tarea-dialog',
  templateUrl: './tarea-dialog.component.html',
  styleUrls: ['./tarea-dialog.component.scss']
})
export class TareaDialogComponent implements OnInit {

 public formTarea!:FormGroup;
 
constructor(private formBuild: FormBuilder) { }

  ngOnInit(): void {
    this.formTarea=this.formBuild.group({
      titulo:['',[Validators.required,Validators.maxLength(30),Validators.pattern(/^[a-zA-Z 0-9.]+$/)]],
      description:['',Validators.maxLength(250)]
    });
  }
  send(){

  }

}
