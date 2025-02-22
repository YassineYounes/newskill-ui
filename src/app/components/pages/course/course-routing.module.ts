import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseComponent} from './course.component';

const routes: Routes = [
  {
    path: '',
    component: CourseComponent,
    children: [
      {
        path: 'add-course',
        loadChildren: () =>
          import('./add-course/add-course.module').then(
            (m) => m.AddCourseModule
          ),
      },
      {
        path: 'course-details',
        loadChildren: () =>
          import('./course-details/course-details.module').then(
            (m) => m.CourseDetailsModule
          ),
      },
      {
        path: 'course-list',
        loadChildren: () =>
          import('./course-list/course-list.module').then(
            (m) => m.CourseListModule
          ),
      },
      {
        path: 'course-message',
        loadChildren: () =>
          import('./course-message/course-message.module').then(
            (m) => m.CourseMessageModule
          ),
      },
      {
        path: 'course-wishlist',
        loadChildren: () =>
          import('./course-wishlist/course-wishlist.module').then(
            (m) => m.CourseWishlistModule
          ),
      },
    ],
  },
  {
    path: 'course-lesson',
    loadChildren: () => import('./course-lesson/course-lesson.module').then(m => m.CourseLessonModule)
  },
  {
    path: 'course-details',
    loadChildren: () => import('./course-details/course-details.module').then(m => m.CourseDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {
}
