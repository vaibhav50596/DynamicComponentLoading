import { Directive, Input, ComponentFactoryResolver, ViewContainerRef,OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormInputComponent } from './form-input/form-input.component';
import { FormButtonComponent } from './form-button/form-button.component';

const components = {
    input: FormInputComponent,
    button: FormButtonComponent,
  };

@Directive({
  selector: '[dynamicField]',
})
export class DynamicFieldDirective implements OnInit {
  @Input() config;

  @Input() group: FormGroup;
  component;
  
  constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef
  ) {}

  ngOnInit() {
    const component = components[this.config.type];
    const factory = this.resolver.resolveComponentFactory(component);
    this.component = this.container.createComponent(factory);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }

}