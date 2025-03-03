import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {DataService} from 'src/app/shared/service/data/data.service';
import * as AOS from 'aos';
import {routes} from 'src/app/shared/service/routes/routes';
import {
  topCategories,
  featuredInstructor,
  latestBlogs,
  career,
  universitiesCompanies,
  testimonial,
} from 'src/app/models/model';
import {Course} from "../../models/course";
import {CourseService} from "../../services/course.service";
import {environment} from "../../../environments/environment";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";
import {InstructorService} from "../../services/instructor.service";

interface data {
  active?: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  protected readonly environment = environment;
  public routes = routes;
  public topCategories: topCategories[] = [];
  public trendingCourses: Course[] = [];
  public featuredInstructor: User[] = [];
  public latestBlogs: latestBlogs[] = [];
  public featuredCourses: Course[] = [];
  public career: career[] = [];
  public universitiesCompanies: universitiesCompanies[] = [];
  public testimonial: testimonial[] = [];
  selected = '1';
  public topCategoriesOwlOptions: OwlOptions = {
    margin: 24,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 4,
      },
      1170: {
        items: 3,
      },
    },
  };
  public trendingCoursesOwlOptions: OwlOptions = {
    margin: 24,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1170: {
        items: 3,
      },
    },
  };
  public featuredInstructorOwlOptions: OwlOptions = {
    margin: 24,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 4,
      },
      1170: {
        items: 4,
      },
    },
  };
  public latestBlogsOwlOptions: OwlOptions = {
    margin: 24,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 4,
      },
      1170: {
        items: 4,
      },
    },
  };
  public universitiesCompaniesOwlOptions: OwlOptions = {
    margin: 24,
    nav: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 6,
      },
      1170: {
        items: 6,
      },
    },
  };
  public slideConfig = {
    lazyLoad: 'ondemand',
    infinite: true,
  };

  constructor(
    private DataService: DataService,
    public router: Router,
    private courseService: CourseService,
    private instructorService: InstructorService,
    private userService: UserService,) {
    this.topCategories = this.DataService.topCategories;
    this.latestBlogs = this.DataService.latestBlogs;
    this.career = this.DataService.career;
    this.universitiesCompanies = this.DataService.universitiesCompanies;
    this.testimonial = this.DataService.testimonial;
  }

  ngOnInit() {
    AOS.init({duration: 1200, once: true});
    this.getCourseList();
    this.getTrendingCourses();
    this.getInstructors();
  }

  private getCourseList(): void {
    this.featuredCourses = [];
    this.courseService.getCourseList().subscribe((res: Course[]) => {
      this.featuredCourses = res.slice(0, 6);
    });
  }

  private getTrendingCourses(): void {
    this.trendingCourses = [];
    this.courseService.getTrendingCourses().subscribe((res: Course[]) => {
      this.trendingCourses = res.slice(0, 9);
    });
  }

  private getInstructors(): void {
    this.featuredInstructor = [];
    this.instructorService.getInstructorsList().subscribe((res: User[]) => {
      this.featuredInstructor = res.slice(0, 9);
    });
  }
}
