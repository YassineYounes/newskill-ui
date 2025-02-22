import {Component, OnInit} from '@angular/core';
import {DataService} from 'src/app/shared/service/data/data.service';
import {MatTableDataSource} from '@angular/material/table';
import {routes} from 'src/app/shared/service/routes/routes';
import {courseList, latestCourses} from 'src/app/models/model';
import {CourseService} from "../../../../services/course.service";
import {Course} from "../../../../models/course";
import {environment} from "../../../../../environments/environment";
import {Instructor} from "../../../../models/instructor";
import {InstructorService} from "../../../../services/instructor.service";
import {CategoryService} from "../../../../services/category.service";
import {Category} from "../../../../models/category";

interface data {
  active?: boolean;
}

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  public routes = routes;
  public selected = '1';
  public searchDataValue = '';
  public dataSource!: MatTableDataSource<courseList>;

  // pagination variables
  public pageSize = 10;
  public totalData = 0;
  public skip = 0;
  public limit = this.pageSize;
  public pageIndex = 0;
  public serialNumberArray: Array<number> = [];
  public currentPage = 1;
  public pageNumberArray: Array<number> = [];
  public pageSelection = [];
  public totalPages = 0;
  public courseList: Course[] = [];
  public latestCourses: latestCourses[] = [];
  public instructorList: Instructor[] = [];
  public categoriesList: Category[] = [];
  public freeCourses: Course[] = [];
  public payedCourses: Course[] = [];

  constructor(private courseService: CourseService, private instructorService: InstructorService, private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getCourseList();
    this.getInstructorList();
    this.getCategoriesList();
  }

  private getCourseList(): void {
    this.courseList = [];
    this.courseService.getCourseList().subscribe((res: Course[]) => {
      this.courseList = res;
      this.totalData = res.length;
      this.calculateTotalPages(this.totalData, this.pageSize);
      this.freeCourses = res.filter((re: Course) => {return re.isFree});
      this.payedCourses = res.filter((re: Course) => {return !re.isFree});
    });
  }

  private getInstructorList(): void {
    this.instructorService.getActiveInstructorsList().subscribe((res: Course[]) => {
      this.instructorList = res;
    });
  }

  private getCategoriesList(): void {
    this.categoryService.getCategoriesList().subscribe((res: Course[]) => {
      this.categoriesList = res;
    });
  }

  public searchData(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.courseList = this.dataSource.filteredData;
  }

  toggleClass(data: data) {
    data.active = !data.active;
  }

  private calculateTotalPages(totalData: number, pageSize: number): void {
    this.pageNumberArray = [];
    this.totalPages = totalData / pageSize;
    if (this.totalPages % 1 != 0) {
      this.totalPages = Math.trunc(this.totalPages + 1);
    }
    for (let i = 1; i <= this.totalPages; i++) {
      const limit = pageSize * i;
      this.pageNumberArray.push(i);
    }
  }

  protected readonly environment = environment;

  addCourseToWishlist(course: Course) {
    return course.inWishList = !course.inWishList;
  }
}
