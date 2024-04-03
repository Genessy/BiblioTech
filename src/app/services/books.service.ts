import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/book';
import { Categorie } from '../interfaces/categorie';

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

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.basePath}/booksList`, book);
  }
  getCategoryById(id: number): Observable<Categorie> {
    return this.http.get<any>(`${this.basePath}/categoriesList/${id}`);
  }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.basePath}/categoriesList`);
  }

  getBooksByCategory(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.basePath}/booksList?categories=${id}`);
  }

  getBooksByAuthor(id: number): Observable<Book[]> {
    return this.http.get<any[]>(`${this.basePath}/booksList?author=${id}`);
  }
}
