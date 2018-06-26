import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { AdDirective } from './ad.directive';
import { AdItem } from './ad-item';
import { AdComponent } from './ad.component';
import { HeroJobAdComponent } from "./component_two/hero-job-ad.component";
import { HeroProfileComponent } from "./component_one/hero-profile.component";
import { RenderService } from "./service/render-service.service";

@Component({
    selector: 'app-ad-banner',
    template: `
              <div class="ad-banner">
                <h3>Advertisements</h3>
                <ng-template ad-host></ng-template>
              </div>
            `
})
export class AdBannerComponent implements OnInit {
    //@Input() ads: AdItem[];
    ads: AdItem[] = [];
    ad: AdItem;
    currentAdIndex = -1;
    @ViewChild(AdDirective) adHost: AdDirective;
    interval: any;
    inputFieldArray: any = [];

    constructor(private componentFactoryResolver: ComponentFactoryResolver, private service: RenderService) { }

    ngOnInit() {
        this.inputFieldArray = [
            {
                type: 'file',
                name: 'upload resume',
                value: 'Upload Resume!',
                required: true,
                placeholder: 'upload resume'
            }
        ];
        this.inputFieldArray.forEach(element => {
            this.ad = this.service.getAds(element.type);
            this.ads.push(this.ad);
        });

        if (this.ads != undefined || this.ads != null) {
            this.loadComponent();
        }
    }

    loadComponent() {
        this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
        let adItem = this.ads[this.currentAdIndex];

        for(let i=0; i<this.ads.length; i++){
            let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.ads[i].component);
            let viewContainerRef = this.adHost.viewContainerRef;
            // viewContainerRef.clear();
    
            let componentRef = viewContainerRef.createComponent(componentFactory);
            (<AdComponent>componentRef.instance).data = this.ads[i].data;
        }   
    }

    // getAds() {
    //     this.interval = setInterval(() => {
    //         this.loadComponent();
    //     }, 3000);
    // }
}