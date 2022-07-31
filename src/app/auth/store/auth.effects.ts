import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { catchError, from, map, of, switchMap } from "rxjs";
import { AuthService } from "../services/auth.service";
import { SessionStorageService } from "../services/session-storage.service";
import {
    requestLogin,
    requestLoginSuccess,
    requestLoginFail
} from "./auth.actions";

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private sessionStorageService: SessionStorageService

    ) { }

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(requestLogin),
            switchMap((action) =>
                from(this.authService.login(action.user).pipe(
                    map(() => requestLoginSuccess({ token: this.sessionStorageService.getToken()! })),
                    catchError((error) => of(requestLoginFail({ error })))
                )))
        );
    })
}
