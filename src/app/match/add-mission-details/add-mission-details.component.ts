import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Type } from 'app/match/model/type';
import { ArrayType } from '@angular/compiler/src/output/output_ast';
//import { AddMissionSubComponent } from './add-mission-sub.component';

@Component({
  selector: 'app-add-mission-details',
  templateUrl: './add-mission-details.component.html',
  styleUrls: ['./add-mission-details.component.css']
})
export class AddMissionDetailsComponent implements OnInit {

  @Input() inputArray: ArrayType[];
  missionEditForm: FormGroup;

  //dropdown
  selectedType: Type;
  types = [
    new Type(-1, 'Please select'),
    new Type(1, 'String'),
    new Type(2, 'Range'),
    new Type(3, 'Bool'),
  ];

  constructor(private formBuilder: FormBuilder, ) { }

  ngOnInit() {
    this.selectedType = this.types[0];
    this.buildForm();
  }

  onInput($event) {
    $event.preventDefault();
    console.log('selected: ' + $event.target.value);
  }

  buildForm() {
    let newForm = this.formBuilder.group({
      missionDesc: ['InitialValue', [Validators.required]],
      missionOrder: ['InitialValue'],
      gameYear: ['InitialValue'],
      formArray: this.formBuilder.array([])
    });

    const arrayControl = <FormArray>newForm.controls['formArray'];
    this.inputArray.forEach(item => {
      let newGroup = this.formBuilder.group({
        questionDesc: ['InitialValue', [Validators.required]],
        questionOrder: ['InitialValue', [Validators.maxLength(1)]],
        type: ['InitialValue'],
        optionList: ['InitialValue'],
        minRange: ['InitialValue', [Validators.maxLength(1)]],
        maxRange: ['InitialValue', [Validators.maxLength(1)]],
      });
      arrayControl.push(newGroup);
    });

    this.missionEditForm = newForm;
  }

  initSubForm() {
    // initialize Sub form
    return this.formBuilder.group({
      questionDesc: ['InitialValue', [Validators.required]],
      questionOrder: ['InitialValue', [Validators.maxLength(1)]],
      type: ['InitialValue'],
      optionList: ['InitialValue'],
      minRange: ['InitialValue', [Validators.maxLength(1)]],
      maxRange: ['InitialValue', [Validators.maxLength(1)]],
    });
  }

  addInput(): void {
    const arrayControl = <FormArray>this.missionEditForm.controls['formArray'];
   // let newGroup =this.initSubForm();
    let newGroup = this.formBuilder.group({
      questionDesc: ['InitialValue', [Validators.required]],
      questionOrder: ['InitialValue', [Validators.maxLength(1)]],
      type: ['InitialValue'],
      optionList: ['InitialValue'],
      minRange: ['InitialValue', [Validators.maxLength(1)]],
      maxRange: ['InitialValue', [Validators.maxLength(1)]],
    });
    arrayControl.push(newGroup);
  }

  delInput(index: number): void {
    const arrayControl = <FormArray>this.missionEditForm.controls['formArray'];
    arrayControl.removeAt(index);
  }

  onSubmit(): void {
    console.log(this.missionEditForm.value);
    // Your form value is outputted as a JavaScript object.
    // Parse it as JSON or take the values necessary to use as you like

  }






}
