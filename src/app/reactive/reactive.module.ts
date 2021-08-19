import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicsComponent } from './basics/basics.component';
import { SwitchesComponent } from './switches/switches.component';
import { DynamicComponent } from './dynamic/dynamic.component';


@NgModule({
  declarations: [
    BasicsComponent,
    SwitchesComponent,
    DynamicComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { }
