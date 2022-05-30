import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HeroesStore } from '../store/heroes.store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ],
  providers: [HeroesStore]
})
export class DashboardComponent implements OnInit {
  heroes$ = this.heroesStore.heroes$;

  constructor(private heroesStore: HeroesStore) { }

  ngOnInit(): void { }

}
