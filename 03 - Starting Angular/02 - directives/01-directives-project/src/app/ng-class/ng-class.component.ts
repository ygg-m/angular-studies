import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.sass'],
})
export class NgClassComponent implements OnInit {
  style: string = '';
  constructor() {}

  ngOnInit(): void {}

  changeStyle(value: string) {
    this.style = value;
  }
}
