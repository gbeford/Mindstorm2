import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Type } from 'app/match/model/type';

@Component({
  selector: 'app-add-mission-item',
  templateUrl: './add-mission-item.component.html'
})

export class AddMissionItemComponent{
  // will pass in the sub form from the add mission details form

  @Input('group') AddMissionItemForm: FormGroup;

    //dropdown
    selectedType: Type;
    types = [
      new Type(-1, 'Please select'),
      new Type(1, 'String'),
      new Type(2, 'Range'),
      new Type(3, 'Bool'),
    ];
}
