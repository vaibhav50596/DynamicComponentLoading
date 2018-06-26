import { Component, OnInit, Renderer2, ElementRef, ViewEncapsulation, ViewChild } from '@angular/core';
import { RenderService } from "./service/render-service.service";
import { AdItem } from "./ad-item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RenderService],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  //title = 'app';
  //inputFieldArray: any = [];
  //ads: AdItem[];

  constructor(private renderer: Renderer2, private el: ElementRef, private service: RenderService)
  { }
  // @ViewChild('div') div: ElementRef;

  ngOnInit(): void {
  //this.ads = this.service.getAds();

  //   this.inputFieldArray = [
  //     {
  //       type: 'email',
  //       name: 'email',
  //       value: '',
  //       placeholder: 'Your Email',
  //       required: false
  //     },
  //     {
  //       type: 'password',
  //       name: 'password',
  //       value: '',
  //       placeholder: 'Your password',
  //       required: true
  //     },
  //     {
  //       type: 'text',
  //       name: 'text',
  //       value: '',
  //       placeholder: 'Your Name',
  //       required: false
  //     },
  //     {
  //       type: 'date',
  //       name: 'dob',
  //       value: '',
  //       placeholder: 'Your DOB',
  //       required: true
  //     }
  //   ]

    // for (let i = 0; i < this.inputFieldArray.length; i++) {

    //   const divField = this.renderer.createElement('div');
    //   const inputField = this.renderer.createElement('input');
    //   this.renderer.appendChild(divField, inputField);
    //   this.renderer.appendChild(this.el.nativeElement, divField);

    //   this.renderer.setAttribute(inputField, "type", this.inputFieldArray[i].type);
    //   this.renderer.setAttribute(inputField, "name", this.inputFieldArray[i].name);
    //   this.renderer.setAttribute(inputField, "value", this.inputFieldArray[i].value);
    //   this.renderer.setAttribute(inputField, "placeholder", this.inputFieldArray[i].placeholder);
    //   this.renderer.setAttribute(inputField, "required", this.inputFieldArray[i].required);

    //   this.renderer.addClass(inputField, "textClass");
  }
}
