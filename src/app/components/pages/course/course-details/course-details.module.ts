import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CourseDetailsRoutingModule} from './course-details-routing.module';
import {CourseDetailsComponent} from './course-details.component';
import {FeatherIconModule} from 'src/app/shared/module/feather.module';
import {TimeFormatPipe} from "../../../../pipes/time-format.pipe";
import {ComponentsModule} from "../../../components.module";
import {DurationFormatPipe} from "../../../../pipes/duration-format.pipe";
import {HoursDecimalFormatPipe} from "../../../../pipes/hours-decimal-format.pipe";
import {TndCurrencyPipe} from "../../../../pipes/tnd-currency.pipe";


@NgModule({
  declarations: [
    CourseDetailsComponent,
    TimeFormatPipe,
    DurationFormatPipe,
    TndCurrencyPipe,
    HoursDecimalFormatPipe
  ],
  exports: [
    DurationFormatPipe,
    TndCurrencyPipe
  ],
  imports: [
    CommonModule,
    CourseDetailsRoutingModule,
    FeatherIconModule,
    ComponentsModule
  ]
})
export class CourseDetailsModule {
}
