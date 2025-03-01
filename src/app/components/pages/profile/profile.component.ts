import {Component, OnInit} from '@angular/core';
import {routes} from 'src/app/shared/service/routes/routes';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user";
import {environment} from "../../../../environments/environment";

interface data {
  active?: boolean;
}

@Component({
  selector: 'app-instructor-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public routes = routes;
  private userId: string = '';
  public user: User = {};

  constructor(private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.get('userId')) {
        this.userId = params.get('userId') ?? '';
        this.userService.getUser(this.userId).subscribe(user => {
          if (user) {
            this.user = user;
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


  toggleClass(data: data) {
    data.active = !data.active;
  }

  protected readonly environment = environment;
}
