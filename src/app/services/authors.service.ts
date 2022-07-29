import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from './author';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) { }

  getAll() {
    const url = 'http://localhost:4000/authors/all';
    return this.http.get<Author[]>(url);
  }

  createAuthor(author: Author) {
    const url = 'http://localhost:4000/authors/add';
    return this.http.post(url, author);
  }

  editAuthor(id: string, author: Author) {
    const url = `http://localhost:4000/authors/${id}`;
    return this.http.put(url, author);

  }

  getAuthor(id: string) {
    const url = `http://localhost:4000/authors/${id}`;
    return this.http.get<Author>(url);
  }

  deleteAuthor(id: string) {
    const url = `http://localhost:4000/authors/${id}`;
    return this.http.delete(url);
  }
}