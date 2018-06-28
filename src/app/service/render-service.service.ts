import { Injectable, Renderer2, ElementRef, RendererFactory2 } from '@angular/core';
import { HeroProfileComponent } from "./../component_one/hero-profile.component";
import { HeroJobAdComponent } from "./../component_two/hero-job-ad.component";
import { ComponentsRegistry } from './../registry';
import { ComponentData } from './../ad.component'

@Injectable()
export class RenderService {
  constructor(private renderer: Renderer2, private el: ElementRef, private componentRegistry: ComponentsRegistry) {
  }

  // createElement() {
  //     const divField = this.renderer.createElement('div');
  //     const inputField = this.renderer.createElement('input');
  //     this.renderer.appendChild(divField, inputField);
  //     this.renderer.appendChild(this.el.nativeElement, divField);
  //     return inputField;
  // }

  getComponents(elementType: string) {
    return this.componentRegistry.getComponents(elementType);
  }

  addComponents(componentKey:string, componentName:any) {
    this.componentRegistry.addComponents(componentKey, componentName);
  }
}
