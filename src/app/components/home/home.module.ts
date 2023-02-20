import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomePhoneComponent } from './phone/phone.component';
import { HomeTextComponent } from './text/text.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomePhoneComponent,
    HomeTextComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
