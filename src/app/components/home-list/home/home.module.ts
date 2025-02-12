import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/module/shared.module';
import {TranslatePipe} from "@ngx-translate/core";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    TranslatePipe
  ],
  providers: [],
  bootstrap: [HomeComponent],
})
export class HomeModule { }
