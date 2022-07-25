import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from './auth/guards/authorized.guard';
import { NotAuthorizedGuard } from './auth/guards/not-authorized.guard';
import { CourseComponent } from './features/course/course.component';
import { CoursesComponent } from './features/courses/courses.component';
import { LoginComponent } from './features/login/login.component';
import { RegistrationComponent } from './features/registration/registration.component';
import { AdminGuard } from './user/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  },
  {
    path: 'courses',
    component: CoursesComponent,
    canLoad: [AuthorizedGuard],
    children: [
      {
        path: 'add',
        component: CourseComponent,
        canActivate: [AdminGuard]
      },
      {
        path: 'edit/:id',
        component: CourseComponent,
        canActivate: [AdminGuard]
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NotAuthorizedGuard]    
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    canActivate: [NotAuthorizedGuard]     
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
