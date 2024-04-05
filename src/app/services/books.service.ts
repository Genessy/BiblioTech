import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, switchMap, take, tap, throwError  } from 'rxjs';
import { Book } from '../interfaces/book';
import { Categorie } from '../interfaces/categorie';
import { Page } from '../interfaces/page';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  basePath: string = '/api';
  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.basePath}/booksList`);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.basePath}/booksList/${id}`);
  }

  createBook(book: any): Observable<Book> {
        return this.http.post<Book>(`${this.basePath}/booksList`, book).pipe(
          tap(() => console.log('Book created!')),
          catchError((error: HttpErrorResponse) => {
            console.error(error);
            return throwError(error);
          })
        );
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

  modifyBook(book: Book): Observable<Book> {
    return this.http
      .put<Book>(`${this.basePath}/booksList/${book.id}`, book)
      .pipe(
        switchMap(() => this.getBookById(book.id)),
        catchError((error: HttpErrorResponse) => {
          console.error(error);
          return throwError(error);
        })
      );
  }

  modifyPage(page: Page, bookId: number): void {
    const book =  this.getBookById(bookId);
    
    if (book) {
      book.subscribe((book) => {
        const index = book.pages.findIndex((p) => p.id === page.id);
        if (index !== -1) {
          console.log(page);
          
          book.pages[index] = page;
          console.log(book);
          
        }
      });
    }
  }

  deleteBook(id: number): Observable<string> {
    console.log(id);
    
    return this.http.delete(`${this.basePath}/booksList/${id}`).pipe(
      tap(() => console.log('Book deleted!')),
      switchMap(() => 'Book deleted!'),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  addPage(bookId: number, page: any): Observable<Book> {
    let book: Book;
    return this.getBookById(bookId).pipe(
      switchMap((retrievedBook) => {
        book = retrievedBook;
        book.pages.push(page);
        return this.modifyBook(book);
      })
    );
  }
}
