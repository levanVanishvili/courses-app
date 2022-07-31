import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from './user.reducer'

//state.user contains name, isAdmin properties

const userFeatureState = createFeatureSelector<UserState>('userFeatureKey');

export const selectUserState = createSelector(
    userFeatureState,
    (state: UserState) => state.user
);