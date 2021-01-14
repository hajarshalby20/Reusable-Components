import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';
import { RouterLinkWithHref, Routes, RouterModule } from '@angular/router';

const routes:Routes=[
{path:'create',component:CreateComponent},
{path:'index',component:IndexComponent},
{path:'',component:IndexComponent},
];

@NgModule({
  declarations: [CreateComponent, IndexComponent],
  imports: [
  
  CommonModule,RouterModule.forChild(routes)
  ]
})
export class CourseModule { }
