import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { Observable } from "rxjs";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";

export interface HeroesState {
    heroes: Hero[];
}

@Injectable()
export class HeroesStore extends ComponentStore<HeroesState> {

    constructor(private heroService: HeroService) {
        super({ heroes: [] })
    }

    heroes$: Observable<Hero[]> = this.heroService.getHeroes();

}