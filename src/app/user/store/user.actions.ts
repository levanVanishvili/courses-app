import { createAction, props } from "@ngrx/store";
import { User } from 'src/app/user/user';

export const requestCurrentUser = createAction(
    '[User API] request Current User',
    props<{user: User}>()
);

export const requestCurrentUserSuccess = createAction(
    '[User API] request Current User Success',
    props<{user: User}>()
);

export const requestCurrentUserFail = createAction(
    '[User API] request Current User Fail',
    props<{error: string}>()
);