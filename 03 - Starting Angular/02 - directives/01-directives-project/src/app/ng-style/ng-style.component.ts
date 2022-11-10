import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.sass'],
})
export class NgStyleComponent implements OnInit {
  bgColor: string = '';
  txtColor: string = '';

  changeBackground(value: string) {
    this.bgColor = value;
  }

  changeText(value: string) {
    this.txtColor = value;
  }
  constructor() {}

  ngOnInit(): void {}
}
