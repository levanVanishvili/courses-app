import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthorsState } from './authors.reducer'

const AuthorsFeatureState = createFeatureSelector<AuthorsState>('authorsFeatureKey');

const getAuthors = createSelector(AuthorsFeatureState, (state: AuthorsState) => state.authors);
const getAddedAuthors = createSelector(AuthorsFeatureState, (state: AuthorsState) => state.addedAuthor);

export const selectAuthorsState = {
    AuthorsFeatureState,
    getAuthors,
    getAddedAuthors,
};