import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { books, categories, users } from './bibliotech';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
      const booksList = books;
      const categoriesList = categories;
      const userList = users
      return {booksList, categoriesList, userList};
  }
}


