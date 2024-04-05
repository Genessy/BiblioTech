import { Injectable } from '@angular/core';
import { Observable, catchError, map, switchMap, tap, throwError } from 'rxjs';
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
    const userBody = { ...user, role: 'user' };
    return this.http.post<User>(`${this.basePath}/userList`, userBody).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  loginUser(user: {
    email: string;
    password: string;
  }): Observable<User | string> {
    return this.getUsers().pipe(
      map((users: User[]) => {
        const foundUser = users.find(
          (u) => u.email === user.email && u.password === user.password
        );
        if (foundUser) {
          localStorage.setItem('user', JSON.stringify({...foundUser, IsAuthorized: true}));
          return foundUser
        }
        return 'User not found';
      })
    );
  }

 
  modifyUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.basePath}/userList/${user.id}`, user).pipe(
      switchMap(() => this.getUserById(user.id)),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
  get currentUser(): User | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  isUserBookAuthor(author: number): boolean {
    console.log(this.currentUser?.id, author);
    
    return this.currentUser?.id === author;
}
}
