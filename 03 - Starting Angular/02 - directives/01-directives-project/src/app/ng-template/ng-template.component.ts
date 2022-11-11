import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.sass'],
})
export class NgTemplateComponent implements OnInit {
  lock1: boolean = false;
  lock2: boolean = false;
  lock3: boolean = false;
  lock4: boolean = false;
  lock5: boolean = false;

  constructor() {}
  ngOnInit(): void {}
}
