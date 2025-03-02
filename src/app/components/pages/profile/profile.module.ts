import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProfileRoutingModule} from './profile-routing.module';
import {ProfileComponent} from "./profile.component";
import {SharedModule} from "../../../shared/module/shared.module";
import {ComponentsModule} from "../../components.module";


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    ComponentsModule
  ]
})
export class ProfileModule {
}
