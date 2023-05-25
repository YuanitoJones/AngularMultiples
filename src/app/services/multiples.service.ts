import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import IMultiple from '@app/interfaces/multiples.interface';

@Injectable({
  providedIn: 'root',
})
export class MultiplesService {
  constructor(private firestore: Firestore) {}

  addMultiple(multiple: IMultiple) {
    const multipleRef = collection(this.firestore, 'multiples');
    return addDoc(multipleRef, multiple);
  }
}
