import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseDetailsComponent} from './course-details.component';
import {SecondsToMinutesPipe} from "../../../../pipes/seconds-to-minutes.pipe";

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
