import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.sass'],
})
export class NgModelComponent implements OnInit {
  item: string = '';
  constructor() {}

  ngOnInit(): void {}
}
