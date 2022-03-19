import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {BlogLayoutComponent} from "./shared/layout/blog-layout/blog-layout.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const blogChildRoute: Routes =[
  {
    path:'',
    loadChildren:()=>import('./blog/blog.module').then(m=>m.BlogModule)
  }
]

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'auth',
    loadChildren: ()=>import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'blog',
    component: BlogLayoutComponent,
    children : blogChildRoute
  },
  {
    path:'**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
