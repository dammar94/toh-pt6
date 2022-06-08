import { Component, OnInit } from '@angular/core';
import { HeroSearchStore } from './hero-search.store';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
  providers: [HeroSearchStore]
})
export class HeroSearchComponent implements OnInit {

  constructor(public cs: HeroSearchStore) {}

  ngOnInit(): void { }

}
