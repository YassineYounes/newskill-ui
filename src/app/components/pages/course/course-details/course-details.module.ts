import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CourseDetailsRoutingModule} from './course-details-routing.module';
import {CourseDetailsComponent} from './course-details.component';
import {FeatherIconModule} from 'src/app/shared/module/feather.module';
import {SecondsToMinutesPipe} from "../../../../pipes/seconds-to-minutes.pipe";


@NgModule({
  declarations: [
    CourseDetailsComponent,
    SecondsToMinutesPipe
  ],
  imports: [
    CommonModule,
    CourseDetailsRoutingModule,
    FeatherIconModule
  ]
})
export class CourseDetailsModule {
}
