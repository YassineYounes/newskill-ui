import {Component} from '@angular/core';
import {CommonService} from './shared/service/common/common.service';
import {url} from './models/model';
import {NavigationEnd, Router, Event as RouterEvent} from '@angular/router';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dreams-lms';
  public base = '';
  public page = '';
  public last = '';

  constructor(private common: CommonService, private Router: Router, private translate: TranslateService) {
    this.common.base.subscribe((base: string) => {
      this.base = base;
    });
    this.common.page.subscribe((page: string) => {
      this.page = page;
    });
    this.common.last.subscribe((last: string) => {
      this.last = last;
    });
    this.Router.events.subscribe((data: RouterEvent) => {
      if (data instanceof NavigationEnd) {
        this.getRoutes(Router);
      }
    });
    this.getRoutes(this.Router);

    this.translate.addLangs(['en', 'fr', 'ar']);
    this.translate.setDefaultLang('en');
    const browserLang = localStorage.getItem('language') || translate.getBrowserLang();
    this.translate.use(browserLang?.match(/en|fr|ar/) ? browserLang : 'en');
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }

  private getRoutes(data: url): void {
    const splitVal = data.url.split('/');
    this.common.base.next(splitVal[1]);
    this.common.page.next(splitVal[2]);
    this.common.last.next(splitVal[3]);
  }
}
