import { CardService } from './../services/card.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html'
})
export class CardsPage implements OnInit {
  cards: Array<Card>;
  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.cards = this.cardService.getFakeCards();
    this.cards = this.cardService.getRealCards();
  }
}
