import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor() {}

  getFakeCards(): Array<Card> {
    const res = new Array<Card>();
    res.push(new Card('what is your name', 'Fares'));
    return res;
  }

  getAllCards() {
    firebase
      .firestore()
      .collection('cards')
      .get()
      .then(queryDocumentSnaptshot => {
        console.log(queryDocumentSnaptshot);
        return queryDocumentSnaptshot.docs;
      })
      .catch(err => {
        console.log(err);
      });
  }
}
