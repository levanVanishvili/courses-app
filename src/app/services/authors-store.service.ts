import { Injectable } from '@angular/core';
import { BehaviorSubject, finalize } from 'rxjs';
import { Author } from './author';
import { AuthorsService } from './authors.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorsStoreService {
  private authors$$ = new BehaviorSubject(this.getAllAuthors);
  private isLoading$$ = new BehaviorSubject(false);
  public authors$ = this.authors$$.asObservable();
  isLoading$ = this.isLoading$$.asObservable();

  constructor(private authorsService: AuthorsService) { }

  getAllAuthors() {
    this.isLoading$$.next(true);
    return this.authorsService.getAll().pipe(
        finalize(() => {
            this.isLoading$$.next(false);
        })
    );
  }

  createAuthor(author: Author) {
    return this.authorsService.createAuthor(author);
  }

  editAuthor(id: string, author: Author) {
    return this.authorsService.editAuthor(id, author);
  }

  getAuthor(id: string) {
    return this.authorsService.getAuthor(id);
  }

  deleteAuthor(id: string) {
    return this.authorsService.deleteAuthor(id);
  }
}
