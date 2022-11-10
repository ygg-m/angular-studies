import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.sass'],
})
export class NgSwitchComponent implements OnInit {
  authLevel: string = 'player';
  changeAuthLevel(value: string) {
    this.authLevel = value;
  }
  constructor() {}

  ngOnInit(): void {}
}
