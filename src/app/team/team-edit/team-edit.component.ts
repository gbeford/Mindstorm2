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
  team: ITeam;
  public err: any;
  public teamEditForm: FormGroup;
  public submitted: boolean;
  public resp: ITeam;

  constructor(private formBuilder: FormBuilder,
    private teamService: TeamService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {



   // const id = +this.route.snapshot.params['id'];
    this.route.params.subscribe(
      params => {
        const id = +params['id'];
        this.getTeam(id);
        this.buildForm();
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
      team => {
        this.team = team

      console.log(team);
    }, // Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });
  }

  buildForm(){
    if (this.team) {
      this.teamEditForm = this.formBuilder.group({
        teamName: [this.team.teamName, [<any>Validators.required, <any>Validators.maxLength(25)]],
        teamNumber: [this.team.teamNumber, [<any>Validators.required]],
        coachFirstName: [this.team.coachFirstName, [<any>Validators.required, <any>Validators.maxLength(25)]],
        coachLastName: [this.team.coachLastName, [<any>Validators.required, <any>Validators.maxLength(25)]],
        coachEmail: [this.team.coachEmail, [<any>Validators.required, <any>Validators.email]],
        altCoachFirstName: [this.team.altCoachFirstName],
        altCoachLastName: [this.team.altCoachLastName],
        altCoachEmail: [this.team.altCoachEmail],
        city: [this.team.city, [<any>Validators.required]],
        state: [this.team.state, [<any>Validators.required]],
      });
    }
  }

}
