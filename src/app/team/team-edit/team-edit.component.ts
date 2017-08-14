import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../team.service';
import { ITeam } from 'app/team/model/team';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css']
})

export class TeamEditComponent implements OnInit {
   // title = 'MindStorm!';
  teamList: ITeam[];
  public err: any;
  public teamEditForm: FormGroup;
  public submitted: boolean;
  public resp: ITeam;

  constructor(private _fb: FormBuilder,
    private teamService: TeamService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

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

    const id = +this.route.snapshot.params['id'];
    this.route.params.subscribe(
      params => {
        const id = +params['id'];
      }
    );
  }

  save(team: ITeam, isValid: boolean, teamId: number) {
    this.submitted = true;
    if (team.teamId === 0) {
      this.teamService.addTeam(team).subscribe(
        resp => this.resp = resp,
        err => this.err = <any>err
      );
      console.log(team, isValid);
    } else {
      this.teamService.updateTeam(team).subscribe(
        resp => this.resp = resp,
        err => this.err = err
      );
    }
  }
  getTeam(id: number) {
    // Get all teams
    this.teamService.getTeam(id)
      .subscribe(
      teamList => this.teamList = teamList, // Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });
  }

}
