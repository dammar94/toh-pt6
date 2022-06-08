import { Action } from '@ngrx/store';
import { Hero } from 'src/app/hero';

export const ADD_HERO: string = '[Hero] Add Hero';
export const DELETE_HERO: string = '[Hero] Delete Hero';
export const UPDATE_HERO: string = '[Hero] Update Hero';

export class AddHero implements Action {
  readonly type = ADD_HERO;
  constructor(public payload: string) {}
}

export class DeleteHero implements Action {
  readonly type = DELETE_HERO;
  constructor(public payload: Hero) {}
}

export interface UpdateHeroPayload {
  id: number, 
  nameUpdated: string
}
export class UpdateHero implements Action {
  readonly type = UPDATE_HERO;
  constructor(public payload: UpdateHeroPayload) {}
}

export type All = AddHero | DeleteHero | UpdateHero;
