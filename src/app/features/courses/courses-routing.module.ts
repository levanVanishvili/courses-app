import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from 'src/app/auth/guards/authorized.guard';
import { CourseComponent } from '../course/course.component';
import { CoursesComponent } from './courses.component';

const routes: Routes = [
  { path: '',
    component: CoursesComponent,
    canLoad: [AuthorizedGuard],
  },
  {
    path: ':id',
    component: CourseComponent,
    canLoad: [AuthorizedGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
