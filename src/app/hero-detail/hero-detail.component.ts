import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.store';
import { selectHeroById } from '../state/hero/hero.selectors';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  hero$: Observable<Hero | undefined>;
  heroName: string = '';

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private store: Store<AppState>
  ) {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.hero$ = this.store.select(selectHeroById(id));
     ;
  }

  ngOnInit(): void { }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    /* if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    } */
  }
}
