import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {routes} from 'src/app/shared/service/routes/routes';
import {CourseService} from "../../../../services/course.service";
import {Course} from "../../../../models/course";
import {environment} from "../../../../../environments/environment";
import {UserService} from "../../../../services/user.service";
import {User} from "../../../../models/user";

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  protected readonly environment = environment;
  public routes = routes;
  public course: Course = {};
  public instructor: User = {};

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private userService: UserService,) {

  }

  ngOnInit() {
    this.initCourse();
  }

  private initCourse() {
    this.route.paramMap.subscribe(params => {
      if (params.get('courseId')) {
        this.courseService.getCourse(<string>params.get('courseId')).subscribe(course => {
          if (course) {
            this.course = course;
            this.initInstructor(course.instructorId);
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

  private initInstructor(userId: any) {
    this.userService.getUser(userId).subscribe(user => {
      if (user) {
        this.instructor = user;
      }
    })
  }

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
