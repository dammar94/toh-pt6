import { Component, OnInit } from '@angular/core';
import { DashboardStore } from './dashboard.store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardStore]
})
export class DashboardComponent implements OnInit {

  constructor(public cs: DashboardStore) { }

  ngOnInit(): void { }

}
