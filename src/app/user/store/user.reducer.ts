
import { createReducer, on } from "@ngrx/store";
import { User } from "../user";
import { requestCurrentUser, requestCurrentUserSuccess, requestCurrentUserFail} from "./user.actions";

export const userFeatureKey = 'userFeatureKey';

export interface UserState {
    user: User,
    error?: string,
    status?: 'pending' | 'loading' | 'error' | 'success';
};

export const initialState: UserState = {
    user: {
        name: '',
        email: '',
        password: '',
        isAdmin: false
    },
    status: 'pending',
};

export const userReducer = createReducer(
    initialState,
    on(requestCurrentUser, (state, { user }) => ({
        ...state,
        user: user
      })),

    on(requestCurrentUserSuccess, (state, { user }) => ({
        ...state,
        user: user,
        status: 'success'
    })),

    on(requestCurrentUserFail, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error'
    }))
)

