import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  basePath: string = '/api';
  getBooks(): Observable<any[]> {
    
    return this.http.get<any[]>(`${this.basePath}/booksList`);
  }

  getBookById(id: number):Observable<Book> {
    return this.http.get<Book>(`${this.basePath}/booksList/${id}`);
  }

  getCategoryById(id: number): Observable<any[]> {
    return this.http.get<any>(`${this.basePath}/categoriesList/${id}`);
  }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.basePath}/categoriesList`);
  }
}
