
import { createReducer, on } from "@ngrx/store";
import { Author } from "src/app/services/author";
import { requestAuthors, 
         requestAuthorsSuccess, 
         requestAuthorsFail, 
         requestAddAuthor, 
         requestAddAuthorSuccess, 
         requestAddAuthorFail,
         resetAddedAuthor} from "./authors.actions";

export const authorsFeatureKey = 'authorsFeatureKey';

export interface AuthorsState {
    authors: Author[],
    addedAuthor: Author,
    error?: string,
};

export const initialState: AuthorsState = {
    authors: [],
    addedAuthor: {name: ''},
};

export const authorsReducer = createReducer(
    initialState,
    on(requestAuthors, (state) => ({
        ...state,
    })),

    on(requestAuthorsSuccess, (state, authors) => ({
        ...state,
        authors: authors.authors,
    })),

    on(requestAuthorsFail, (state, err) => ({
        ...state,
        error: err.error
    })),

    on(requestAddAuthor, (state, author) => ({
        ...state,
        author: author.author
    })),

    on(requestAddAuthorSuccess, (state) => ({
        ...state,
    })),

    on(requestAddAuthorFail, (state, err) => ({
        ...state,
        error: err.error
    })),

    on(resetAddedAuthor, (state, author) => ({
        ...state,
        id: author.id
    })),
)

