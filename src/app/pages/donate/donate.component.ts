import { Component, OnInit } from '@angular/core';
import { States } from '../../utils/states';
import { ISelect } from '../../utils/interfaces';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  states: ISelect [];

  constructor() { }

  ngOnInit(): void {
    this.states = States.map((state, index) => ({
      id: index,
      value: state,
    }));
  }

  getSelectedState(value: string) {
    console.log('state', value)
  }
}
