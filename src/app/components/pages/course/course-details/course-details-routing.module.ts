import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseDetailsComponent} from './course-details.component';
import {TimeFormatPipe} from "../../../../pipes/time-format.pipe";

const routes: Routes = [
  {path: ':courseId', component: CourseDetailsComponent},
  {path: '', component: CourseDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseDetailsRoutingModule {
}
