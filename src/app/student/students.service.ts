import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { StudentList, StudentTodo } from './students.models';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  getStudentList(): Observable<StudentList[]> {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get<StudentList[]>(url);
  }

  getStudentTodo(userId: string | null): Observable<StudentTodo[]> {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}/todos`;
    return this.http.get<StudentTodo[]>(url);
  }
}
