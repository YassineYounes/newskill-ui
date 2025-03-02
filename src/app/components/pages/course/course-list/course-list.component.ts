import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {routes} from 'src/app/shared/service/routes/routes';
import {CourseService} from "../../../../services/course.service";
import {Course} from "../../../../models/course";
import {environment} from "../../../../../environments/environment";
import {Instructor} from "../../../../models/instructor";
import {InstructorService} from "../../../../services/instructor.service";
import {CategoryService} from "../../../../services/category.service";
import {Category} from "../../../../models/category";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  public routes = routes;
  public selectedSort = 'popular';
  public searchDataValue = '';
  public dataSource!: MatTableDataSource<Course>;
  public pageSize = 10;
  public totalData = 0;
  public skip = 0;
  public limit = this.pageSize;
  public pageNumberArray: Array<number> = [];
  public courseList: Course[] = [];
  public latestCourses: Course[] = [];
  public instructorList: Instructor[] = [];
  public categoriesList: Category[] = [];
  public freeCourses: Course[] = [];
  public payedCourses: Course[] = [];
  public selectedCategories: string[] = [];
  public selectedInstructors: string[] = [];
  public selectedFreeFilter = true;
  public selectedPayedFilter = true;
  public displayType = 'grid';
  public currentPage = 1;
  public paginatedCourses: Course[] = [];
  public coursesPerPage: number = 9;
  public totalPages: number = 1;

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
      this.latestCourses = res.slice(0, 5);
      this.totalData = res.length;
      this.calculateTotalPages(this.totalData, this.pageSize);
      this.freeCourses = res.filter((re: Course) => {
        return re.isFree
      });
      this.payedCourses = res.filter((re: Course) => {
        return !re.isFree
      });
      this.dataSource = new MatTableDataSource<Course>(this.courseList);
      this.changeSort();
      this.updatePagination();
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
    this.updatePagination();
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

  onInstructorChange(event: any, instructorId: string | undefined): void {
    if (!instructorId) {
      return;
    }
    if (event.target.checked) {
      this.selectedInstructors.push(instructorId);
    } else {
      this.selectedInstructors = this.selectedInstructors.filter(cat => cat !== instructorId);
    }
    this.applyFilters();
  }

  onCategoryChange(event: any, categoryName: string | undefined): void {
    if (!categoryName) {
      return;
    }
    if (event.target.checked) {
      this.selectedCategories.push(categoryName);
    } else {
      this.selectedCategories = this.selectedCategories.filter(cat => cat !== categoryName);
    }
    this.applyFilters();
  }

  public applyFilters(): void {
    let filteredCourses = this.courseList;

    // Apply instructor filter
    if (this.selectedInstructors.length > 0) {
      filteredCourses = filteredCourses.filter(course =>
        course.instructor?.id && this.selectedInstructors.includes(course.instructor.id)
      );
    }

    // Apply category filter
    if (this.selectedCategories.length > 0) {
      filteredCourses = filteredCourses.filter(course =>
        course.categoriesName?.some((category: string) => this.selectedCategories.includes(category))
      );
    }

    // Apply instructor filter
    if (!this.selectedFreeFilter) {
      filteredCourses = filteredCourses.filter(course => !course.isFree);
    }
    if (!this.selectedPayedFilter) {
      filteredCourses = filteredCourses.filter(course => course.isFree);
    }

    // Update data source
    this.dataSource.data = filteredCourses;
    this.updatePagination();
  }

  clearFilter() {
    this.selectedPayedFilter = true;
    this.selectedFreeFilter = true;
    this.selectedCategories = [];
    this.selectedInstructors = [];
    this.applyFilters()
  }

  changeSort() {
    if (!this.courseList) return;

    switch (this.selectedSort) {
      case 'popular':
        this.courseList.sort((a, b) => {
          if(b.enrollmentsCount === undefined || a.enrollmentsCount === undefined) {
            console.log('hey')
            return -1;
          }
          return (b.enrollmentsCount || 0) - (a.enrollmentsCount || 0);
        });
        break;

      case 'rated':
        this.courseList.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;

      case 'newest':
        this.courseList.sort((a, b) => {
          if(!b.createdAt || !a.createdAt) {
            return -1;
          }
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        });
        break;
    }

    // Update the filtered data after sorting
    this.applyFilters();
  }

  updatePagination() {
    if (!this.dataSource?.filteredData) return;
    this.totalPages = Math.ceil(this.dataSource.filteredData.length / this.coursesPerPage);
    this.paginatedCourses = this.getPaginatedCourses();
  }

  getPaginatedCourses(): any[] {
    const startIndex = (this.currentPage - 1) * this.coursesPerPage;
    return this.dataSource.filteredData.slice(startIndex, startIndex + this.coursesPerPage);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.paginatedCourses = this.getPaginatedCourses();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.changePage(this.currentPage + 1);
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.changePage(this.currentPage - 1);
    }
  }
}
