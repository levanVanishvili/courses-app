import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectUserState } from "./user.selectors";
import { requestCurrentUser } from "./user.actions";
import { User } from "../user";


@Injectable()
export class UserStateFacade {
    user$ = this.store.select(selectUserState);
    user?: User;

    constructor(private store: Store) {}

    getCurrentUser() {
        this.user$.subscribe(val => this.user = val);
        this.store.dispatch(requestCurrentUser({user: this.user!}))
    }
}