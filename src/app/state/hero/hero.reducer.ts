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
    let heroToAdd: Hero = {
      id: idCount,
      name: action.payload as string
    };
    idCount++;
    return [...state, heroToAdd];
    case HeroActions.DELETE_HERO:
      return state.filter( hero => hero.id != (action.payload as Hero).id);
    default:
      return state;
  }
}


