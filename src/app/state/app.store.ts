import { ActionReducerMap } from "@ngrx/store";
import { Hero } from "../hero";
import { heroReducer } from "./hero/hero.reducer";

export interface AppState {
  heroes: Hero[];
};

export const reducers: ActionReducerMap<AppState, any> = {
  heroes: heroReducer
};
