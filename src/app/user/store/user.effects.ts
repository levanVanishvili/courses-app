import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { catchError, from, map, of, switchMap } from "rxjs";
import { UserService } from "../user.service";
import { requestCurrentUser, requestCurrentUserSuccess, requestCurrentUserFail } from "./user.actions";

@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private userService: UserService
    ) { }

    getCurrentUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(requestCurrentUser),
            switchMap(() =>
                from(this.userService.getUser()).pipe(
                    map((user) => requestCurrentUserSuccess({ user: user })),
                    catchError((error) => of(requestCurrentUserFail({ error })))
                ))
        );
    })
}