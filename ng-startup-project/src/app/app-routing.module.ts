import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: 'student/course', 
    component:LayoutComponent,
    loadChildren: () => import('../app/components/student/course/course.module').then(m => m.CourseModule)
  },
  {
    path: 'instructor/course', 
    component:LayoutComponent,
    loadChildren: () => import('../app/components/instructor/course/course.module').then(m => m.CourseModule)
  },
  {
    path: 'user', 
    loadChildren: () => import('../app/components/user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


exports: [RouterModule]
})
export class AppRoutingModule { }
