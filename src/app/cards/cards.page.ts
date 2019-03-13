import { CardService } from './../services/card.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html'
})
export class CardsPage implements OnInit {
  cards: string[];
  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.cards = this.cardService.fakeCardList;
  }
}
