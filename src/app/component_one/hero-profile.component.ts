import { Component, Input, OnInit, Renderer2, ElementRef } from '@angular/core';

//import { AdComponent } from './../ad.component';
import { ComponentData } from './../ad.component'

@Component({
  template: `
    <div class="hero-profile" style="background-color:yellow">
      <h3>Featured Hero Profile</h3>
      <span>Hero Name: {{properties}}</span>
      <br>
      <span>Hero Details: {{properties}}</span>
      <br>
      <strong>Submit your resume today!!</strong>
      <div *ngFor="let input of inputFieldArray">
        <input [type]="input.type" [name]="input.name" [placeholder]="input.placeholder" 
        [value]="input.value" class="textClass">
      </div>
    </div>
  `
})
export class HeroProfileComponent implements OnInit, ComponentData {
  inputFieldArray: any = [];
  
  @Input() type: any;
  @Input() properties: any;


  constructor()
  { }

  ngOnInit(): void {

    this.inputFieldArray = [
      {
        type: 'file',
        name: 'upload resume',
        value: '',
        required: true,
        placeholder: 'upload resume'
      },
    ];
  } 
}