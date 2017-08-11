import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { TeamService } from '../team.service';
import { Team } from 'app/team/model/team';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css']
})

export class TeamEditComponent implements OnInit {
  public err: any;
  public teamEditForm: FormGroup;
  public submitted: boolean;
  public resp: Team;

  constructor(private _fb: FormBuilder, private teamService: TeamService) { }

  ngOnInit() {

    this.teamEditForm = this._fb.group({
      teamName: ['', [<any>Validators.required, <any>Validators.maxLength(25)]],
      teamNumber: ['', [<any>Validators.required]],
      coachFirstName: ['', [<any>Validators.required, <any>Validators.maxLength(25)]],
      coachLastName: ['', [<any>Validators.required, <any>Validators.maxLength(25)]],
      coachEmail: ['', [<any>Validators.required, <any>Validators.email]],
      altCoachFirstName: [''],
      altCoachLastName: [''],
      altCoachEmail: [''],
      city: ['', [<any>Validators.required]],
      state: ['', [<any>Validators.required]],
    });
  }

  save(team: Team, isValid: boolean) {
    this.submitted = true;
    if (team.teamId === 0) {
    this.teamService.addTeam(team).subscribe(
      resp => this.resp = resp,
      err => this.err = err
    );
    console.log(team, isValid);
  } else {
    this.teamService.updateTeam(team).subscribe(
      resp => this.resp = resp,
      err => this.err = err
    );
  }
}

}
