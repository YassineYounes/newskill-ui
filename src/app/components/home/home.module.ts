import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {SharedModule} from 'src/app/shared/module/shared.module';
import {CourseDetailsModule} from "../pages/course/course-details/course-details.module";
import {ComponentsModule} from "../components.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    CourseDetailsModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [HomeComponent],
})
export class HomeModule {
}
