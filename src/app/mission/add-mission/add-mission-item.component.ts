import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Type } from 'app/match/model/type';

@Component({
  selector: 'app-add-mission-item',
  templateUrl: './add-mission-item.component.html'
})

export class AddMissionItemComponent implements OnInit{
  // will pass in the sub form from the add mission details form

  @Input() AddMissionItemForm: FormGroup;

  // dropdown
  selectedType: Type;
  types = [
    new Type(-1, 'Please select'),
    new Type(1, 'String'),
    new Type(2, 'Range'),
    new Type(3, 'Bool'),
  ];


  ngOnInit() {
    this.setDropdownValue();
  }

  setDropdownValue() {
    this.selectedType = this.types[0];
    (<FormGroup>this.AddMissionItemForm)
      .patchValue({ type: this.selectedType.name });
  }

  onInput($event) {
    $event.preventDefault();
    console.log('selected: ' + $event.target.value);
  }



}
