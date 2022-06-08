import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Hero } from '../hero';
import { AppState } from '../state/app.store';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes$ : Observable<Hero[]>;

  constructor(private store: Store<AppState>) {
    this.heroes$ = this.store.select('heroes');
  }

  ngOnInit(): void { }

  /* getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  } */

  add(name: string): void {
    /* name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      }); */
  }

  delete(hero: Hero): void {
    /* this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe(); */
  }

}
