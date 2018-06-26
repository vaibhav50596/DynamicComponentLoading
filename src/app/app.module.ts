import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RenderService } from "./service/render-service.service";
import { AdDirective } from "./ad.directive";
import { HeroProfileComponent } from "./component_one/hero-profile.component";
import { HeroJobAdComponent } from "./component_two/hero-job-ad.component";
import { AdBannerComponent } from "./ad-banner.component";

@NgModule({
  declarations: [
    AppComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective
  ],
  imports: [ BrowserModule ],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
  providers: [RenderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
