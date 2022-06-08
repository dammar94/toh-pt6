import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HeroDetailStore } from './hero-detail.store';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers: [HeroDetailStore]
})
export class HeroDetailComponent implements OnInit {

  constructor(
    private location: Location,
    public cs: HeroDetailStore
  ) { }

  ngOnInit(): void { }

  goBack(): void { this.location.back(); }

}
