import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {routes} from 'src/app/shared/service/routes/routes';
import {CourseService} from "../../../../services/course.service";
import {Course} from "../../../../models/course";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  public routes = routes;
  private courseId = '';
  course: Course = {};

  constructor(private route: ActivatedRoute, private courseService: CourseService) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.get('courseId')) {
        this.courseId = params.get('courseId') ?? '';
        this.courseService.getCourse(this.courseId).subscribe(course => {
          if (course) {
            this.course = course;
          }
        }, error => {
          if (error.status === 404) {
            location.assign('/error/404');
            return;
          }
        })
      } else {
        location.assign('/error/404');
      }
    });
  }

  protected readonly environment = environment;

  getDiscountedPrice() {
    if (!this.course.price) {
      return 0
    }
    if (!this.course.salePercentage) {
      return this.course.price;
    }
    return this.course.price * (1 - this.course.salePercentage / 100);
  }
}
