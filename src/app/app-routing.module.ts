import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {BlogLayoutComponent} from "./shared/layout/blog-layout/blog-layout.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AuthGuard} from "./shared/guards/auth.guard";

const blogChildRoute: Routes =[
  {
    path:'',
    loadChildren:()=>import('./blog/blog.module').then(m=>m.BlogModule),
    canActivate: [AuthGuard]
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
    children : blogChildRoute,

  },
  {
    path:'ggg',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
