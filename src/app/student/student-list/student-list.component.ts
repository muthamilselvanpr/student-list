import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { StudentList } from '../students.models';
import * as UserAction from '../../state/student.actions';
import * as fromSelector from '../../app.selector';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit, OnDestroy {

  studentList: StudentList[] | null = null;
  subscription: Subscription = new Subscription();

  constructor(private store: Store, private router: Router, private studentsService: StudentsService) { }

  ngOnInit(): void {
    this.subscription = this.store.select(fromSelector.getUserList).subscribe(studentList => {
      if(!studentList) {
        this.store.dispatch(UserAction.userList());
      }
      this.studentList = studentList;
    });
    // this.studentList$ = this.studentsService.getStudentList();
  }

  navigateToStudenTodo(student: StudentList): void {
    const userUrl = `user/${student.id}`
    this.router.navigateByUrl(userUrl);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
