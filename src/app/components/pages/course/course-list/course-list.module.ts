import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CourseListRoutingModule} from './course-list-routing.module';
import {CourseListComponent} from './course-list.component';
import {FeatherIconModule} from 'src/app/shared/module/feather.module';
import {SharedModule} from 'src/app/shared/module/shared.module';
import {ComponentsModule} from "../../../components.module";
import {CourseDetailsModule} from "../course-details/course-details.module";


@NgModule({
  declarations: [
    CourseListComponent
  ],
  imports: [
    CommonModule,
    CourseListRoutingModule,
    FeatherIconModule,
    SharedModule,
    ComponentsModule,
    CourseDetailsModule
  ]
})
export class CourseListModule {
}
