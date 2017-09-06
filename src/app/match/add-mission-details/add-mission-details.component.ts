import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-mission-details',
  templateUrl: './add-mission-details.component.html',
  styleUrls: ['./add-mission-details.component.css']
})
export class AddMissionDetailsComponent implements OnInit {



  public missionEditForm: FormGroup;
  types: string[] = ["range", "string", "bool"];

  constructor() { }

  ngOnInit() {

  }



}
