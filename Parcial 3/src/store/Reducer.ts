import { Actions, AppState, SomeActions } from "../types/store"

export const reducer = ((Actions: Actions , state: AppState)=>{
    const {action , payload} = Actions;
    switch (action) {
        case  SomeActions.SAVE_RECETA:
            state.receta = [...state.receta]
            return state;
    
        default:
            return state;
    }

})