import { createAction, props } from "@ngrx/store";
import { Author } from "src/app/services/author";
import { User } from "src/app/user/user";

export const requestAuthors = createAction(
    '[Authors API] request Authors'
);

export const requestAuthorsSuccess = createAction(
    '[Authors API] request Authors Success',    
    props<{authors: Author[]}>()
);

export const requestAuthorsFail = createAction(
    '[Authors API] request Authors Fail',
    props<{error: string}>()
);

export const requestAddAuthor = createAction(
    '[Authors API] request Add Authors',
    props<{author: Author}>()
);

export const requestAddAuthorSuccess = createAction(
    '[Authors API] request Add Authors Success'
);

export const requestAddAuthorFail = createAction(
    '[Authors API] request Add Authors Fail',
    props<{error: string}>()
);

export const resetAddedAuthor = createAction(
    '[Authors API] reset Add Authors',
    props<{id: string}>()
);