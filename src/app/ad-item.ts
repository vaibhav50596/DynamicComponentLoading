import { Type, OnInit } from '@angular/core';
import { HeroProfileComponent } from "./component_one/hero-profile.component";
import { HeroJobAdComponent } from "./component_two/hero-job-ad.component";

export class AdItem{
  constructor(public component: Type<any>, public data: any) {
  }
}
