import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { StudentTodo } from '../students.models';
import * as UserAction from '../../state/student.actions';
import * as fromSelector from '../../app.selector';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

  userTodoList: any = null;
  userId: string | null = '';
  subscription: Subscription = new Subscription();

  constructor(private store: Store, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId');

    this.subscription = this.store.select(fromSelector.getUserTodoList, {userId: this.userId}).subscribe(userTodoList => {
      if(!userTodoList) {
        this.store.dispatch(UserAction.userTodoList({userId: this.userId}));
      }
      this.userTodoList = JSON.parse(JSON.stringify(userTodoList));
    });
    // this.userTodo$ = this.studentService.getStudentTodo(this.userId);
  }

  flipStatus(userTodo: StudentTodo): void {
    this.userTodoList = this.userTodoList.map((data: StudentTodo) => {
      if(data.id === userTodo.id) {
        data.completed = !data.completed
      }
      return data;
    })
  }

}
