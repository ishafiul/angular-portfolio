import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { MyworkComponent } from './mywork/mywork.component';
import { ContactmeComponent } from './contactme/contactme.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from "@angular/material/button";
import {MatRippleModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    SkillComponent,
    MyworkComponent,
    ContactmeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTabsModule,
    MatButtonModule,
    MatRippleModule,
    MatIconModule,
    MatFormFieldModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
