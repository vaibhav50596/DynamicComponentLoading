import { Component, Input, OnInit } from '@angular/core';

import { AdComponent } from './../ad.component'
import { ComponentData } from './../ad.component'

@Component({
    template: `
    <div class="job-ad" style="background-color:green">
      <h4>{{data.headline}}</h4>
     
      <span>{{data.body}}</span>
      <br>
      <div *ngFor="let input of inputFieldArray">
      <input [type]="input.type" [name]="input.name" [placeholder]="input.placeholder" 
      [value]="input.value" class="textClass" (click)="showAlert()">
      </div>
    </div>
  `
})
export class HeroJobAdComponent implements AdComponent, OnInit, ComponentData {
    @Input() data: any;
    @Input() type: any;
    @Input() properties: any;
    inputFieldArray: any = [];

    ngOnInit(): void {

        this.inputFieldArray = [
            {
                type: 'button',
                name: 'Hire!',
                value: 'Hire!',
                required: true,
                placeholder: 'Hire This Hero'
            },
        ];
        // const divField = this.renderer.createElement('div');
        // const inputField = this.renderer.createElement('input');
        // this.renderer.appendChild(divField, inputField);
        // this.renderer.appendChild(this.el.nativeElement, divField);
    }
    showAlert() {
        alert("This hero is hired");
    }

}