import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from './auth.reducer'

const AuthFeatureState = createFeatureSelector<AuthState>('authFeatureKey');

const isUserAuthorized = createSelector(AuthFeatureState, (state: AuthState) => state.isAuthorized);
const getToken = createSelector(AuthFeatureState, (state: AuthState) => state.token);
const getSpecificErrorMessage  = createSelector(AuthFeatureState, (state: AuthState) => state.error);

export const selectAuthState = {
    AuthFeatureState,
    isUserAuthorized,
    getToken,
    getSpecificErrorMessage,
};