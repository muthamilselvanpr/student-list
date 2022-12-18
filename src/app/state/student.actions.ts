import { createAction, props } from '@ngrx/store';
import { StudentList, StudentTodo } from '../student/students.models';

export const userList = createAction(
  '[User List] UserList',
);

export const userListSuccess = createAction(
  '[User List] UserListSuccess',
  props<{ response: StudentList[] | null }>()
);

export const userTodoList = createAction(
  '[User List] UserTodoList',
  props<{ userId: string | null }>()
);

export const userTodoListSuccess = createAction(
  '[User List] UserTodoListSucess',
  props<{ response: {userId: string | null, studentTodo: StudentTodo[]} }>()
);
