import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.sass'],
})
export class NgForComponent implements OnInit {
  jobs: string[] = [];

  constructor() {
    this.jobs = ['swordman', 'mage', 'archer', 'thief', 'merchant'];
  }

  ngOnInit(): void {}

  newJob: string = '';
  addJob(): void {
    this.jobs.push(this.newJob);
  }
  removeJob(): void {
    this.jobs.pop();
  }
}
