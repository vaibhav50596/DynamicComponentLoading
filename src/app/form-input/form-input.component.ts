import { Component, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'form-input',
  template: `
    <div class="dynamic-field form-input">
      <form [formGroup]="group">
      <label>{{ config.label }}</label>
      <input [type]="config.type" [name]="config.name" [placeholder]="config.placeholder" 
      [formControlName]="config.name" [value]="config.value" class="textClass">
      </form>
    </div>
  `,
})
export class FormInputComponent {
  config;
  group: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.group = this.fb.group({
    });
  }
}