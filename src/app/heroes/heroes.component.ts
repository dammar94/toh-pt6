import { Component, OnInit } from '@angular/core';
import { HeroesStore } from './heroes.store';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroesStore]
})
export class HeroesComponent implements OnInit {

  constructor(public cs: HeroesStore) { }

  ngOnInit(): void { }

}
