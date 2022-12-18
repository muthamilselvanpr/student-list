import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { StudentsService } from '../student/students.service';
import * as fromAction from './student.actions'

@Injectable()
export class StudentEffects {

  loadUser$ = createEffect(() => this.actions$.pipe(
    ofType(fromAction.userList),
    mergeMap(() => this.studentsService.getStudentList()
      .pipe(
        map(response => (fromAction.userListSuccess({response}))),
        catchError(() => EMPTY)
      ))
    )
  );

  loadUserTodo$ = createEffect(() => this.actions$.pipe(
    ofType(fromAction.userTodoList),
    mergeMap((payload) => this.studentsService.getStudentTodo(payload.userId)
      .pipe(
        map(studentTodo => {
          const userId: string | null = payload.userId;
          const obj = {userId, studentTodo}
          return fromAction.userTodoListSuccess({response : obj})
        }),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private studentsService: StudentsService
  ) {}
}
