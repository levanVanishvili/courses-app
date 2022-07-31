import { ActionReducerMap } from "@ngrx/store";
import { AuthEffects } from "../auth/store/auth.effects";
import { authReducer, AuthState } from "../auth/store/auth.reducer";
import { UserEffects } from "../user/store/user.effects";
import { userReducer, UserState } from "../user/store/user.reducer";
import { AuthorsEffects } from "./authors/authors.effects";
import { authorsReducer, AuthorsState } from "./authors/authors.reducer";

export interface State {
    user: UserState,
    auth: AuthState,
    authors: AuthorsState,
}

export const reducers: ActionReducerMap<State> = {
    user: userReducer,
    auth: authReducer,
    authors: authorsReducer
};

export const effects = [UserEffects, AuthEffects, AuthorsEffects];