import { createSelector } from "@ngrx/store";
import { Hero } from "src/app/hero";
import { AppState } from "../app.store";

export const selectHeroes = (state: AppState) => state.heroes;

export const selectHeroById = (heroId: number) =>
  createSelector(
    selectHeroes, 
    (heroes: Hero[]) => 
      heroes.find(c => c.id === heroId) 
  )