export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  receta: receta [];
};

export enum SomeActions {
  "SAVE_RECETA" = "SAVE_RECETA",
}

export interface SomeAction {
  action: SomeActions.SAVE_RECETA;
  payload: receta;
}

export type Actions = SomeAction;
