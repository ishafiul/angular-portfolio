import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeModule } from '../home/home.module';
import {MatIconModule} from '@angular/material/icon';
import { BlogComponent } from './layout/blog/blog.component';
import { BlogLayoutComponent } from './layout/blog-layout/blog-layout.component';
import { BlogFooterComponent } from './layout/blog-layout/blog-footer/blog-footer.component';
import { BlogHeaderComponent } from './layout/blog-layout/blog-header/blog-header.component';


@NgModule({
  declarations: [
    LayoutComponent,
    BlogComponent,
    BlogLayoutComponent,
    BlogFooterComponent,
    BlogHeaderComponent
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
