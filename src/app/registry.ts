import { AdItem } from './ad-item';
import { OnInit } from "@angular/core";
import { HeroProfileComponent } from "./component_one/hero-profile.component";
import { HeroJobAdComponent } from "./component_two/hero-job-ad.component";

export class ComponentsRegistry implements OnInit{
    
    adItem: AdItem;

    constructor(){

    }

    ngOnInit(): void {
        
    this.adItem = new AdItem(HeroProfileComponent, { name: 'Iron Man Hero', bio: 'Hero of Marvel Comics' });
    this.adItem = new AdItem(HeroJobAdComponent, { headline: 'Hiring for Several Positions', body: 'Hire this hero!' });
    }
}