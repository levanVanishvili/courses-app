import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { catchError, from, map, of, switchMap } from "rxjs";
import { AuthorsService } from "src/app/services/authors.service";
import {
    requestAuthors,
    requestAuthorsSuccess,
    requestAuthorsFail
} from "./authors.actions";

@Injectable()
export class AuthorsEffects {
    constructor(
        private actions$: Actions,
        private authorsService: AuthorsService,

    ) { }

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(requestAuthors),
            switchMap(() =>
                from(this.authorsService.getAll().pipe(
                    map((authors) => requestAuthorsSuccess({authors})),
                    catchError((error) => of(requestAuthorsFail({ error })))
                )))
        );
    })
}
