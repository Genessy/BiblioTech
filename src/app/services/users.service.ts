import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../interfaces/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  basePath: string = '/api';
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.basePath}/userList`);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.basePath}/userList/${id}`);
  }
  
  createUser(user: {}): Observable<User> {
    const userBody = {...user, role: 'user'}
    return this.http.post<User>(`${this.basePath}/userList`, userBody).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }
}
