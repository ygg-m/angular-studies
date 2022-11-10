import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.sass'],
})
export class NgTemplateComponent implements OnInit {
  answer1: number = 12;
  answer1Correct: boolean = false;

  onKey(event: any, question: number) {
    if (question === 1) {
      if (event.target.value === this.answer1) {
        this.answer1Correct = true;
      }
    }
  }

  constructor() {}
  ngOnInit(): void {}
}
