import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectAuthorsState } from "./authors.selectors";
import { requestAuthors, requestAddAuthor } from "./authors.actions";
import { Author } from "src/app/services/author";

@Injectable()
export class AuthorsStateFacade {
    authors$ = this.store.select(selectAuthorsState.getAuthors);
    addedAuthor$ = this.store.select(selectAuthorsState.getAddedAuthors);

    constructor(private store: Store) { }

    getAuthors() {
        this.store.dispatch(requestAuthors());
    };

    addAuthor(author: Author) {
        this.store.dispatch(requestAddAuthor({ author: author }));
    };
}