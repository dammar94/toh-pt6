import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Hero } from '../hero';
import { AppState } from '../state/app.store';
import { HeroesStore } from './heroes.store';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroesStore]
})
export class HeroesComponent implements OnInit {
  heroes$ : Observable<Hero[]> = this.componentStore.heroes$;

  constructor(private componentStore: HeroesStore) { }

  ngOnInit(): void { }

  addHero(): void { this.componentStore.addHero(); }

  onInputChange(name: string): void { this.componentStore.setName(name); }

  delete(hero: Hero): void { this.componentStore.deleteHero(hero); }

}
