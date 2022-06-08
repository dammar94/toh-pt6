import { createSelector } from '@ngrx/store';
import { Hero } from 'src/app/hero';
import { AppState } from '../app.store';
import * as HeroActions from './hero.actions';

export type Action = HeroActions.All;

export const defaultState: Hero[] = [
  {
    id: 0,
    name: 'HERO0',
  },
  {
    id: 1,
    name: 'HERO1',
  },
  {
    id: 2,
    name: 'HERO2',
  }
];

var idCount : number = 3;

export function heroReducer(state: Hero[] = defaultState, action: Action) {
  console.log(action.type, state);
  switch (action.type) {
    case HeroActions.ADD_HERO:
      // TODO
      return state;
    case HeroActions.DELETE_HERO:
      // TODO
      return state;
    default:
      return state;
  }
}

export const selectHeroes = (state: AppState) => state.heroes;

// selector with param
export const selectHeroById = (heroId: number) =>
  createSelector(
    selectHeroes, 
    (heroes: Hero[]) => 
      heroes.find(c => c.id === heroId) 
  )
