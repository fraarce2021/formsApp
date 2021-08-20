import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateRoutingModule } from './template-routing.module';
import { DynamicComponent } from './dynamic/dynamic.component';
import { BasicsComponent } from './basics/basics.component';
import { SwitchesComponent } from './switches/switches.component';
import { CustomMinDirective } from './directives/custom-min.directive';



@NgModule({
  declarations: [
    DynamicComponent,
    BasicsComponent,
    SwitchesComponent,
    CustomMinDirective
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule
    ]
})
export class TemplateModule { }
