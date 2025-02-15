import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {CommonService} from 'src/app/shared/service/common/common.service';
import {DataService} from 'src/app/shared/service/data/data.service';
import {SidebarService} from 'src/app/shared/service/sidebar/sidebar.service';
import {routes} from 'src/app/shared/service/routes/routes';
import {SidebarItem} from 'src/app/models/model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public routes = routes;
  @ViewChild('stickyMenu')
  menuElement!: ElementRef;
  sticky = false;
  elementPosition!: number;
  base = '';
  page = '';
  last = '';
  selectedCategory: any;
  showDark = false;
  white_bg = false;
  sidebar: SidebarItem[];
  isDarkMode: boolean = false;

  constructor(
    private common: CommonService,
    private data: DataService,
    private sidebarService: SidebarService
  ) {
    this.common.base.subscribe((res: string) => {
      this.base = res;
    });
    this.common.page.subscribe((res: string) => {
      this.page = res;
    });
    this.common.last.subscribe((res: string) => {
      this.last = res;
    });
    this.sidebar = this.data.sideBar;
    this.sidebarService.showDark.subscribe((res: string | boolean) => {
      this.showDark = res == 'true';
    });
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    this.sticky = windowScroll >= this.elementPosition;
    this.white_bg = windowScroll != 0;
  }

  public toggleSidebar(): void {
    this.sidebarService.openSidebar();
  }

  public hideSidebar(): void {
    this.sidebarService.closeSidebar();
  }

  applyTheme() {
    if (this.isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

  public themeChange(): void {
    this.sidebarService.themeColor();
    this.applyTheme();

  }


}
