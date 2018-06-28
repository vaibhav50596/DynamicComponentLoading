
import { OnInit, Component, Input } from "@angular/core";
import { HeroProfileComponent } from "./component_one/hero-profile.component";
import { HeroJobAdComponent } from "./component_two/hero-job-ad.component";
import { ComponentData } from './ad.component'

@Component({
    selector: 'cmp-registry',
    templateUrl: './registry.component.html'
})

export class ComponentsRegistry implements OnInit, ComponentData{
    factoryCmp: any;
    REGISTRY: Map<string, ComponentData> = new Map<string, ComponentData>();
    @Input() type: any;
    @Input() properties: any;

    constructor(){
    }

    ngOnInit(): void {
        //type ComponentClass = { new (): ComponentData }; 
        //this.REGISTRY = new Map<string, ComponentClass>();
    }

    addComponents(key:string, componentName:any){
        // this.REGISTRY.set("file", HeroProfileComponent);
        // this.REGISTRY.set("button", HeroJobAdComponent);
        this.REGISTRY.set(key, componentName);
    }

    getComponents(componentKey: string){
        this.factoryCmp =  this.REGISTRY.get(componentKey);
        return this.factoryCmp;
    }
}