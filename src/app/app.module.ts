import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RenderService } from "./service/render-service.service";
import { AdDirective } from "./ad.directive";
import { HeroProfileComponent } from "./component_one/hero-profile.component";
import { HeroJobAdComponent } from "./component_two/hero-job-ad.component";
import { AdBannerComponent } from "./ad-banner.component";
import { ComponentsRegistry } from './registry';
import { FormInputComponent } from './form-input/form-input.component';
import { DynamicFieldDirective } from './dynamic-field.directive';
import { FormButtonComponent } from './form-button/form-button.component';

@NgModule({
  declarations: [
    AppComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective,
    FormInputComponent,
    DynamicFieldDirective,
    FormButtonComponent
  ],
  imports: [ BrowserModule, FormsModule,ReactiveFormsModule ],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent, FormInputComponent, FormButtonComponent ],
  providers: [RenderService, ComponentsRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { }
