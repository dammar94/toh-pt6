import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { AppState } from '../state/app.store';
import { HeroesStore } from '../store/heroes.store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ],
  providers: [HeroesStore]
})
export class DashboardComponent implements OnInit {
  heroes$ : Observable<Hero[]>;

  constructor(private store: Store<AppState>) {
    this.heroes$ = this.store.select('heroes');
  }

  ngOnInit(): void { }

}
