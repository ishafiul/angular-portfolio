import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeModule } from '../home/home.module';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HomeModule,
    MatIconModule
  ],
  exports:[
    LayoutComponent,
    MatIconModule
  ]
})
export class SharedModule { }
