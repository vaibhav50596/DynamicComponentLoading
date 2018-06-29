import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver,Output,EventEmitter } from '@angular/core';

import { AdDirective } from './ad.directive';
import { AdItem } from './ad-item';
import { HeroJobAdComponent } from "./component_two/hero-job-ad.component";
import { HeroProfileComponent } from "./component_one/hero-profile.component";
import { RenderService } from "./service/render-service.service";
import { ComponentData } from './ad.component';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-ad-banner',
    template: `
              <div class="ad-banner">
                <h3>Advertisements</h3>
                <form class="dynamic-form" [formGroup]="form">
                
                <ng-container *ngFor="let field of config;" dynamicField
                [config]="field" [group]="form"> </ng-container>
                </form>
                <ng-template ad-host></ng-template>
              </div>
            `
})
export class AdBannerComponent implements OnInit  {
    @Input() ads: AdItem[] = [];
    ad: AdItem;
    currentAdIndex = -1;
    @ViewChild(AdDirective) adHost: AdDirective;
    inputFieldArray: any = [];
    factoryCmp: any;
    @Input() config: any[] = [];
    form: FormGroup;

    constructor(private componentFactoryResolver: ComponentFactoryResolver, private service: RenderService,
                private fb: FormBuilder) { 
    }

    ngOnInit() {
        this.form = this.createGroup();
        this.service.addComponents("file", new AdItem(HeroProfileComponent, "Hero Profile"));
        this.service.addComponents("button", new AdItem(HeroJobAdComponent, "Hero Job Ad"));
        this.inputFieldArray = [
            {
                type: 'file',
                name: 'upload resume',
                value: 'Upload Resume!',
                required: true,
                placeholder: 'upload resume'
            },
            //Add more json data to load more components. simply remove commented code and u will see that component too
            {
                type: 'button',
                name: 'upload resume',
                value: 'Upload Resume!',
                required: true,
                placeholder: 'upload resume'
            }
        ];
        this.inputFieldArray.forEach(element => {
            this.factoryCmp = this.service.getComponents(element.type);
            this.ads.push(this.factoryCmp);
        });

        if (this.factoryCmp != undefined || this.factoryCmp != null) {
            this.loadComponent();
        }
    }

    createGroup() {
        const group = this.fb.group({});
        this.config.forEach(control => group.addControl(control.name, this.fb.control('')));
        return group;
      }

    loadComponent() {
        //this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
        //let adItem = this.ads[this.currentAdIndex];  

        for(let i=0; i<this.ads.length; i++){
            let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.ads[i].component);
            let viewContainerRef = this.adHost.viewContainerRef;
            // viewContainerRef.clear();
    
            let componentRef = viewContainerRef.createComponent(componentFactory);
            //(<AdComponent>componentRef.instance).data = this.ads[i].data;
            (<ComponentData>componentRef.instance).properties = "Iron Man";
        }   
    }
}