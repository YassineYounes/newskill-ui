import {Component, Input} from '@angular/core';
import {CommonService} from 'src/app/shared/service/common/common.service';
import {routes} from 'src/app/shared/service/routes/routes';
import {User} from "../../../../models/user";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-instructor-sidebar',
  templateUrl: './instructor-sidebar.component.html',
  styleUrl: './instructor-sidebar.component.scss',
})
export class InstructorSidebarComponent {
  @Input() user: User = {};
  public routes = routes;
  public base = '';
  public page = '';
  public last = '';

  constructor(private common: CommonService) {
    this.common.base.subscribe((base: string) => {
      this.base = base;
    });
    this.common.page.subscribe((page: string) => {
      this.page = page;
    });
    this.common.last.subscribe((last: string) => {
      this.last = last;
    });
  }

  protected readonly environment = environment;
}
