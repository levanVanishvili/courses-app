import { ActionReducerMap } from "@ngrx/store";
import { AuthEffects } from "../auth/store/auth.effects";
import { authReducer, AuthState } from "../auth/store/auth.reducer";
import { UserEffects } from "../user/store/user.effects";
import { userReducer, UserState } from "../user/store/user.reducer";
import { AuthorsEffects } from "./authors/authors.effects";
import { authorsReducer, AuthorsState } from "./authors/authors.reducer";
import { CoursesEffects } from "./courses/courses.effects";
import { coursesReducer, CoursesState } from "./courses/courses.reducer";

export interface State {
    user: UserState,
    auth: AuthState,
    authors: AuthorsState,
    courses: CoursesState
}

export const reducers: ActionReducerMap<State> = {
    user: userReducer,
    auth: authReducer,
    authors: authorsReducer,
    courses: coursesReducer
};

export const effects = [UserEffects, AuthEffects, AuthorsEffects, CoursesEffects];