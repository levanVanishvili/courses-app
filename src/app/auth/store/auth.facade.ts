import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectAuthState } from "./auth.selectors";
import { requestLogin, requestLoginSuccess, requestLogout, requestLogoutSuccess, requestRegister } from "./auth.actions";
import { User } from "src/app/user/user";
import { SessionStorageService } from "../services/session-storage.service";

@Injectable()
export class AuthStateFacade {
    isAuthorized$ = this.store.select(selectAuthState.isUserAuthorized);
    getToken$ = this.store.select(selectAuthState.getToken);
    getLoginErrorMessage$ = this.store.select(selectAuthState.getSpecificErrorMessage);

    constructor(private store: Store,
        private sessionStorageService: SessionStorageService) { }

    login(body: User) {
        this.store.dispatch(requestLogin({ user: body }));
    };

    register(body: User) {
        this.store.dispatch(requestRegister({ user: body }));
    };

    logout() {
        this.store.dispatch(requestLogout());
    };

    closeSession() {
        this.store.dispatch(requestLogoutSuccess());
    }

    setAuthorization() {
        this.store.dispatch(requestLoginSuccess({ token: this.sessionStorageService.getToken()! }));
    }
}