import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hero } from '../hero';
import { AppState } from '../state/app.store';
import { HeroesStore } from '../heroes/heroes.store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ],
  providers: [HeroesStore]
})
export class DashboardComponent implements OnInit {
  heroes$ : Observable<Hero[]> = this.store.select('heroes');

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void { }

}
