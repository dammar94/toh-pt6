import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Hero } from "../hero";
import { AppState } from "../state/app.store";

export interface HeroSearchState {
    nameToSearch: string;
}

@Injectable()
export class HeroSearchStore extends ComponentStore<HeroSearchState> {

    constructor(private store: Store<AppState>) {
        super({ nameToSearch: '' })
    }
    
    readonly heroes$: Observable<Hero[]> = this.store.select('heroes');
    readonly nameToSearch$ = this.select(state => state.nameToSearch);
    readonly heroesFiltered$ = this.select(
        this.heroes$,
        this.nameToSearch$,
        (heroes, nameToSearch) => {
            if(nameToSearch === '') return [];
            else return heroes.filter(hero => hero.name.toUpperCase().includes(nameToSearch.toUpperCase()));
        }
    );

    setNameToSearch = this.updater((state, nameToSearch: string) => { return {nameToSearch} });

}