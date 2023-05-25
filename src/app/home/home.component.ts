import { Component, OnInit } from '@angular/core';
import IMultipleList from '@app/interfaces/multipleList.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ngOnInit() {}

  // Number to use in input
  initialNumber = 0;
  //Array which will contain al multiples
  multiples: IMultipleList[] = [];

  CalculateNumber(receivedNumber: number) {
    const calculatedNumbers: IMultipleList[] = [];
    for (let i = 1; i <= receivedNumber; i++) {
      //Runs from 1 to the input number
      if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
        //Check if number is divisible by 3, 5 or 7
        calculatedNumbers.push({ multipleNumber: i, multipleList: this.getMultiples(i) });
      }
    }
    //Assigns array to multiples variable to reassign instead of pushing infinitely
    this.multiples = calculatedNumbers;
  }

  CheckSmallerMultiple(receivedNumber: number) {
    //returns color of smallest multiple
    if (receivedNumber % 3 === 0) return 'green';
    if (receivedNumber % 5 === 0) return 'red';
    if (receivedNumber % 7 === 0) return 'blue';
    return 'white';
  }

  getMultiples(receivedNumber: number) {
    const multiples: number[] = [];
    if (receivedNumber % 3 === 0) multiples.push(3);
    if (receivedNumber % 5 === 0) multiples.push(5);
    if (receivedNumber % 7 === 0) multiples.push(7);
    if (multiples.length > 1) return multiples;
    return [];
  }
}
