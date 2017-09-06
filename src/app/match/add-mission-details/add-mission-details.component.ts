import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Type } from 'app/match/model/type';

@Component({
  selector: 'app-add-mission-details',
  templateUrl: './add-mission-details.component.html',
  styleUrls: ['./add-mission-details.component.css']
})
export class AddMissionDetailsComponent implements OnInit {


  public missionEditForm: FormGroup;
  selectedType: Type;
  types = [
    new Type(-1, 'Please select'),
    new Type(1, 'String'),
    new Type(2, 'Range'),
    new Type(3, 'Bool'),
  ];

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit() {

    this.selectedType = this.types[0];
    this.buildForm();
  }

  onInput($event) {
    $event.preventDefault();
    console.log('selected: ' + $event.target.value);
  }

  buildForm() {
    this.missionEditForm = this.formBuilder.group({
      missionDesc: [''],
      missionOrder: [''],
      gameYear: [''],
      questionDesc: [''],
      questionOrder: [''],
      type: [''],
      optionList: [''],
      minRange: [''],
      maxRange: [''],
    });
  }



}
