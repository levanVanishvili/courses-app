import { createAction, props } from "@ngrx/store";
import { User } from "src/app/user/user";

export const requestLogin = createAction(
    '[Auth API] request Login',
    props<{user: User}>()
);

export const requestLoginSuccess = createAction(
    '[Auth API] request Login Success',
    props<{token: string}>()
);

export const requestLoginFail = createAction(
    '[Auth API] request Login Fail',
    props<{error: string}>()
);

export const requestRegister = createAction(
    '[Auth API] request Register',
    props<{user: User}>()
);

export const requestRegisterSuccess = createAction(
    '[Auth API] request Register Success'
);

export const requestRegisterFail = createAction(
    '[Auth API] request Register Fail',
    props<{error: string}>()
);

export const requestLogout = createAction(
    '[Auth API] request Logout'
);

export const requestLogoutSuccess = createAction(
    '[Auth API] request Logout Success'
);