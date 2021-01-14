import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersComponent } from './offers/offers.component';
import { NewComponent } from './new/new.component';
import { IndexComponent } from './index/index.component';
import { TopComponent } from './top/top.component';
import { Routes, RouterModule } from '@angular/router';



const routes:Routes=[
  {path:'index',component:IndexComponent},
  {path:'new',component:NewComponent},
  {path:'offers',component:OffersComponent},
  {path:'top',component:TopComponent},
  {path:'',component:IndexComponent}
  ];
@NgModule({
  declarations: [OffersComponent, NewComponent, IndexComponent, TopComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class CourseModule { }
