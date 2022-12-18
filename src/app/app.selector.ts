import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as StudentReducer from './state/student.reducer'

export const selectFeature = createFeatureSelector<StudentReducer.State>('studentState');

export const getUserList = createSelector(
  selectFeature,
  (state: StudentReducer.State) => state.studentList
);
export const getUserTodoList = createSelector(
  selectFeature,
  (state: StudentReducer.State, props: {userId: string | null}) => {
    if(state.studentTodoList && props.userId) {
      return state.studentTodoList[props.userId]
    }
    return state.studentTodoList
  }
);
