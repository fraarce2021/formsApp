import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateRoutingModule } from './template-routing.module';
import { DynamicComponent } from './dynamic/dynamic.component';
import { BasicsComponent } from './basics/basics.component';
import { SwitchesComponent } from './switches/switches.component';



@NgModule({
  declarations: [
    DynamicComponent,
    BasicsComponent,
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule
  ]
})
export class TemplateModule { }
