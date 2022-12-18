import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { StudentListComponent } from './student/student-list/student-list.component';

const routes: Routes = [
  { path: '', component: StudentListComponent },
  { path: 'user/:userId', component: StudentDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
