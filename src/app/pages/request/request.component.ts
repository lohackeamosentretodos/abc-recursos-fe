import { Component, OnInit } from '@angular/core';
import { ICheckbox, ISelect } from '../../utils/interfaces';
import { States } from '../../utils/states';

enum Resources {
  PS = 'PS',
  HEALTH_CENTER = 'HEALTH_CENTER',
  HOSPITAL = 'HOSPITAL',
  OTHER = 'OTHER',
}

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  list: ICheckbox [];
  states: ISelect [];
  private itemSelected: ICheckbox;

  constructor() { }

  ngOnInit(): void {
    this.list = [
      this.getItem(Resources.PS, 'Puesto Salud (PS)'),
      this.getItem(Resources.HEALTH_CENTER, 'Centro de Salud (A , B, C)'),
      this.getItem(Resources.HOSPITAL, 'Hospital'),
      this.getItem(Resources.OTHER, 'Otra')
    ];

    this.states = States.map((state, index) => ({
      id: index,
      value: state,
    }));
  }

  getItemSelected = (item: ICheckbox) => {
    this.itemSelected = item
  }

  private getItem = (_id, _title ): ICheckbox => ({
    id: _id,
    title: _title,
    value: _id,
    checked: false
  })

}
