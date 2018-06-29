import { Directive, Input, ComponentFactoryResolver, ViewContainerRef,OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormInputComponent } from './form-input/form-input.component';

const components = {
    input: FormInputComponent
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
      debugger
    const component = components[this.config.type];
    const factory = this.resolver.resolveComponentFactory(component);
    this.component = this.container.createComponent(factory);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }

}