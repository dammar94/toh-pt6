import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HeroSearchStore } from './hero-search.store';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ],
  providers: [HeroSearchStore]
})
export class HeroSearchComponent implements OnInit {
  heroesFiltered$: Observable<Hero[]> = this.componentStore.heroesFiltered$;

  constructor(private componentStore: HeroSearchStore) {}

  ngOnInit(): void { }

  onInputChange(name: string): void { this.componentStore.setNameToSearch(name); }
}
