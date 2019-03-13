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

  getRealCards(): Array<Card> {
    let result = new Array<Card>();
    firebase
      .firestore()
      .collection('cards')
      .get()
      .then(queryDocumentSnaptshot => {
        console.log(queryDocumentSnaptshot);
        // how to return the results as array ?
        result = queryDocumentSnaptshot.docs.map(
          r => new Card(r.data().question, r.data().answer)
        );
      })
      .catch(err => {
        console.log(err);
      });
    return result;
  }
}
