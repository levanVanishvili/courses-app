import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Author } from './author';
import { AuthorsService } from './authors.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorsStoreService {
  private authors$$ = new BehaviorSubject(this.getAllAuthors);
  private isLoading$$ = new BehaviorSubject(false);
  public authors$ = this.authors$$.asObservable();
  public isLoading$ = this.isLoading$$.asObservable();

  constructor(private authorsService: AuthorsService) { }

  getAllAuthors() {
    return this.authorsService.getAll();
  }

  createCourse(author: Author) {
    return this.authorsService.createAuthor(author);
  }

  editCourse(id: string, author: Author) {
    return this.authorsService.editAuthor(id, author);
  }

  getCourse(id: string) {
    return this.authorsService.getAuthor(id);
  }

  deleteCourse(id: string) {
    return this.authorsService.deleteAuthor(id);
  }
}
