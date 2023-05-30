import { Actions, SomeActions } from "../types/store";

const SaveRecipes = ((receta: receta):Promise<Actions>=>{
return{

action: SomeActions.SAVE_RECETA,
payload: receta,

}
})

export default {
    SaveRecipes
}