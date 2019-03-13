import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  fakeCardList = ['What is a Class?', 'What is a Type?', 'What is SOLID?'];
  constructor() {}

  getCards() {
    return this.fakeCardList;
  }
}
