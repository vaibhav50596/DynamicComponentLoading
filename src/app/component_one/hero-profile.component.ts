import { Component, Input, OnInit, Renderer2, ElementRef } from '@angular/core';

import { AdComponent } from './../ad.component';

@Component({
  template: `
    <div class="hero-profile" style="background-color:yellow">
      <h3>Featured Hero Profile</h3>
      <span>Hero Name: {{data.name}}</span>
      <br>
      <span>Hero Details: {{data.bio}}</span>
      <br>
      <strong>Submit your resume today!!</strong>
      <div *ngFor="let input of inputFieldArray">
        <input [type]="input.type" [name]="input.name" [placeholder]="input.placeholder" 
        [value]="input.value" class="textClass">
      </div>
    </div>
  `
})
export class HeroProfileComponent implements AdComponent, OnInit {
  inputFieldArray: any = [];
  @Input() data: any;

  constructor()
  { }

  ngOnInit(): void {

    this.inputFieldArray = [
      {
        type: 'file',
        name: 'upload resume',
        value: 'Upload Resume!',
        required: true,
        placeholder: 'upload resume'
      },
    ];


    // const divField = this.renderer.createElement('div');
    // const inputField = this.renderer.createElement('input');
    // this.renderer.appendChild(divField, inputField);
    // this.renderer.appendChild(this.el.nativeElement, divField);
  }

  


}