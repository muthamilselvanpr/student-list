import { Action, createReducer, on } from '@ngrx/store';
import { StudentList, StudentTodo } from '../student/students.models';
import * as UserAction from './student.actions';

export interface State {
  studentList: StudentList[] | null,
  studentTodoList: { [key: string]: StudentTodo[] } | null
}

export const initialState: State = {
  studentList: null,
  studentTodoList: null
};

export const studentReducer = createReducer(
  initialState,
  on(UserAction.userListSuccess, (state, response) => ({ ...state, studentList: response.response })),
  on(UserAction.userTodoListSuccess, (state, response) => {
    const userId = response.response.userId;
    const obj: {[key: string]: StudentTodo[]} | null = {...state.studentTodoList} || {};
    if(userId) {
    obj[userId] = response.response?.studentTodo;
    }
    return {...state, studentTodoList: obj}
  })
);
