import { Action } from '@ngrx/store';
import { Hero } from 'src/app/hero';

export const ADD_HERO: string = '[Hero] Add Hero';
export const DELETE_HERO: string = '[Hero] Delete Hero';

export class AddHero implements Action {
  readonly type = ADD_HERO;
  constructor(public payload: Hero) {}
}

export class DeleteHero implements Action {
  readonly type = DELETE_HERO;
  constructor(public payload: Hero) {}
}

export type All = AddHero | DeleteHero;
