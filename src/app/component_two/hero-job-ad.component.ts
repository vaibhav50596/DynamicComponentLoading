import { Component, Input, OnInit } from '@angular/core';

//import { AdComponent } from './../ad.component'
import { ComponentData } from './../ad.component'

@Component({
    template: `
    <div class="job-ad" style="background-color:green">
      <h4>{{properties.headline}}</h4>
     
      <span>{{properties.body}}</span>
      <br>
      <div *ngFor="let input of inputFieldArray">
      <input [type]="input.type" [name]="input.name" [placeholder]="input.placeholder" 
      [value]="input.value" class="textClass" (click)="showAlert()">
      </div>
    </div>
  `
})
export class HeroJobAdComponent implements OnInit, ComponentData {
    
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
    }
    showAlert() {
        alert("This hero is hired");
    }

}