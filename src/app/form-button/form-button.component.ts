import { Component, ViewContainerRef, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'form-input',
  template: `
    <div class="dynamic-field form-input">
      <form [formGroup]="group">
      <label>{{ config.label }}</label>
      <button [type]="config.type" [name]="config.name" class="textClass" (click)="dataSubmitted(group.value)">
      {{config.value}}</button>
      </form>
    </div>
  `,
})
export class FormButtonComponent {
  config;
  group: FormGroup;
  @Output() submitted: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.group = this.fb.group({
    });
  }
  dataSubmitted(formData){
    this.submitted.emit(formData);
    console.log(formData.fname);
  }
}