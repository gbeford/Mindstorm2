import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Type } from 'app/match/model/type';
import { ArrayType } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-add-mission',
  templateUrl: './add-mission.component.html',
  styleUrls: ['./add-mission.component.css']
})
export class AddMissionComponent implements OnInit {

  missionEditForm: FormGroup;

  constructor(private formBuilder: FormBuilder, ) { }

  ngOnInit() {

    this.buildForm();
  }


  buildForm() {
    this.missionEditForm = this.formBuilder.group({
      missionDesc: ['', [Validators.required]],
      missionOrder: [''],
      gameYear: [''],
      missionItems: this.formBuilder.array([this.initSubForm()])
    });
  }

  initSubForm() {
    // initialize Sub form
    return this.formBuilder.group({
      questionDesc: ['', [Validators.required]],
      questionOrder: ['', [Validators.maxLength(1)]],
      type: [''],
      optionList: [''],
      minRange: ['', [Validators.maxLength(1)]],
      maxRange: ['', [Validators.maxLength(1)]],
      points: [''],
    });
  }

  addInput(): void {
    const arrayControl = <FormArray>this.missionEditForm.controls['missionItems'];
    arrayControl.push(this.initSubForm());
  }

  delInput(index: number): void {
    const arrayControl = <FormArray>this.missionEditForm.controls['missionItems'];
    arrayControl.removeAt(index);
  }

  onSubmit(): void {
    console.log(this.missionEditForm.value);
    // Your form value is outputted as a JavaScript object.
    // Parse it as JSON or take the values necessary to use as you like

  }


}
