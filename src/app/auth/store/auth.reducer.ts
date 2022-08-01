
import { createReducer, on } from "@ngrx/store";
import { requestLogin, 
         requestLoginSuccess, 
         requestLoginFail, 
         requestRegister, 
         requestRegisterSuccess, 
         requestRegisterFail,
         requestLogout,
         requestLogoutSuccess } from "./auth.actions";

export const authFeatureKey = 'authFeatureKey';

export interface AuthState {
    isAuthorized: boolean,
    token: string,
    error?: 'login' | 'registration',
};

export const initialState: AuthState = {
    isAuthorized: false,
    token: '',
};

export const authReducer = createReducer(
    initialState,
    on(requestLogin, (state, user) => ({
        ...state,
        user: user,
        isAuthorized: true
    })),

    on(requestLoginSuccess, (state) => ({
        ...state,
        token: state.token
    })),

    on(requestLoginFail, (state) => ({
        ...state,
        error: 'login'
    })),

    on(requestRegister, (state) => ({
        ...state,
        isAuthorized: true
    })),

    on(requestRegisterSuccess, (state) => ({
        ...state,
        token: state.token
    })),

    on(requestRegisterFail, (state) => ({
        ...state,
        error: 'registration'
    })),

    on(requestLogout, (state) => ({
        ...state,
        isAuthorized: false
    })),

    on(requestLogoutSuccess, (state) => ({
        ...state,
        token: ''
    })),
)

