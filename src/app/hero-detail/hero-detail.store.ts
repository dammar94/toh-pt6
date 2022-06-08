import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ComponentStore } from "@ngrx/component-store";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";
import { Hero } from "../hero";
import { AppState } from "../state/app.store";
import { UpdateHero } from "../state/hero/hero.actions";

export interface HeroDetailState {
    name: string;
}

@Injectable()
export class HeroDetailStore extends ComponentStore<HeroDetailState> {

    constructor(private store: Store<AppState>, private route: ActivatedRoute,) {
        super({ name: '' });
        this.initializeName();
    }
    
    readonly heroes$: Observable<Hero[]> = this.store.select('heroes');
    readonly hero$: Observable<Hero | undefined> = this.select(
        this.heroes$,
        (heroes) => {
            const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10)
            return heroes.find(hero => hero.id === id);
        }
    );
    readonly name$ = this.select(state => state.name);

    initializeName = () => this.store.pipe(select('heroes'), take(1)).subscribe((heroes) => {
            const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10)
            const hero = heroes.find(hero => hero.id === id);
            this.patchState({ name: hero?.name });
        });

    setNameUpdated = this.updater((state, name: string) => { return {name} });

    updateHeroName = this.updater((state) => { 
        const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10)
        this.store.dispatch(new UpdateHero({
            id: id,
            nameUpdated: state.name
        }));
        return state;
    });

}