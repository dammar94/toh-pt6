import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Hero } from "../hero";
import { AppState } from "../state/app.store";

export interface DashboardState {
    state: string | null;
}

@Injectable()
export class DashboardStore extends ComponentStore<DashboardState> {

    constructor(private store: Store<AppState>) {
        super({ state: null })
    }
    
    heroes$: Observable<Hero[]> = this.store.select('heroes');

}