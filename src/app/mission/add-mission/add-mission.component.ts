import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Type } from 'app/match/model/type';
import { ArrayType } from '@angular/compiler/src/output/output_ast';
import { MissionService } from 'app/mission/mission.service';
import { IMission } from 'app/mission/model/mission';


@Component({
  selector: 'app-add-mission',
  templateUrl: './add-mission.component.html',
  styleUrls: ['./add-mission.component.css']
})
export class AddMissionComponent implements OnInit {

  missionEditForm: FormGroup;
  mission: IMission;
  public submitted: boolean;
  public err: any;
  public resp: IMission;

  constructor(private formBuilder: FormBuilder,
    private missionService: MissionService,
    private router: Router) { }

  ngOnInit() {

    this.buildForm();
  }


  buildForm() {
    this.missionEditForm = this.formBuilder.group({
      missionDescription: ['', [Validators.required]],
      sortOrder: [''],
      matchYear: [''],
      missionItems: this.formBuilder.array([this.initSubForm()])
    });
  }

  initSubForm() {
    // initialize Sub form
    return this.formBuilder.group({
      questionDescription: ['', [Validators.required]],
      sortOrder: ['', [Validators.maxLength(1)]],
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


  save() {
    console.log(this.missionEditForm.value);
    this.submitted = true;
    if (this.missionEditForm.dirty && this.missionEditForm.valid) {
      // copy the form values over the team object values
      const t = Object.assign({}, this.mission, this.missionEditForm.value);
      this.missionService.saveMission(t).subscribe(
        resp => {
          this.resp = resp
          this.missionEditForm.reset();
        },
        err => {
          this.err = <any>err
          console.log(err);
        }
      );
    }
  }



}
