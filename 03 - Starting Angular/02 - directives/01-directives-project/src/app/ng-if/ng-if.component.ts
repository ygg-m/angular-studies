import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.sass'],
})
export class NgIfComponent implements OnInit {
  showCard: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  destroy(): void {
    this.showCard = false;
  }
}
