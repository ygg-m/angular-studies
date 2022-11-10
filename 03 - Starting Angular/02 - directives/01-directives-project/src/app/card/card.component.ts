import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent implements OnInit {
  showCard: boolean = true;
  jobs: string[] = [];
  constructor() {
    this.jobs = ['swordman', 'mage', 'archer', 'thief', 'merchant'];
  }

  ngOnInit(): void {}

  destroy(): void {
    this.showCard = false;
  }
}
