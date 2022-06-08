import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Hero } from "../hero";
import { AppState } from "../state/app.store";
import { AddHero, DeleteHero } from "../state/hero/hero.actions";

export interface HeroesState {
    name: string;
}

@Injectable()
export class HeroesStore extends ComponentStore<HeroesState> {

    constructor(private store: Store<AppState>) {
        super({ name: '' })
    }
    
    heroes$: Observable<Hero[]> = this.store.select('heroes');

    setName = this.updater((state, name: string) => {return {name}});

    addHero = this.updater((state) => {
        this.store.dispatch(new AddHero(state.name))
        return state;
    })

    deleteHero = this.updater((state, hero: Hero) => {
        this.store.dispatch(new DeleteHero(hero));
        return state;
    })

}