import { Injectable, Renderer2, ElementRef, RendererFactory2 } from '@angular/core';
import { AdItem } from "./../ad-item";
import { HeroProfileComponent } from "./../component_one/hero-profile.component";
import { HeroJobAdComponent } from "./../component_two/hero-job-ad.component";

@Injectable()
export class RenderService {
  adItem:AdItem;
  adItems:AdItem[] = [];
  constructor(private renderer: Renderer2, private el: ElementRef) {
  }

  // createElement() {
  //     const divField = this.renderer.createElement('div');
  //     const inputField = this.renderer.createElement('input');
  //     this.renderer.appendChild(divField, inputField);
  //     this.renderer.appendChild(this.el.nativeElement, divField);
  //     return inputField;
  // }

  getAds(elementType: string) {
    debugger
    //this.adItems.push(new AdItem(HeroProfileComponent, { name: 'Iron Man Hero', bio: 'Hero of Marvel Comics' }));
    //this.adItems.push(new AdItem(HeroJobAdComponent, { headline: 'Hiring for Several Positions', body: 'Hire this hero!' }));
    
  
    if (elementType == "file") {
      return new AdItem(HeroProfileComponent, { name: 'Iron Man Hero', bio: 'Hero of Marvel Comics' });
    } else if (elementType == "button") {
      return new AdItem(HeroJobAdComponent, { headline: 'Hiring for Several Positions', body: 'Hire this hero!' });
    } else {
      return ""
    }
  }
}
