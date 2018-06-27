export interface AdComponent {
    data: any;
}

import { Type } from "@angular/core";

export interface ComponentData {
    type: Type<any>;
    properties?: {[property: string]: Object};
}

