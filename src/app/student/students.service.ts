import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { StudentList, StudentTodo } from './students.models';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  getStudentList(): Observable<StudentList[]> {
    const url = environment.JSON_ENDPOINT+'users';
    return this.http.get<StudentList[]>(url);
  }

  getStudentTodo(userId: string | null): Observable<StudentTodo[]> {
    const url = environment.JSON_ENDPOINT+`users/${userId}/todos`;
    return this.http.get<StudentTodo[]>(url);
  }
}
