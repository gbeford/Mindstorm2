import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
    this.route.params.subscribe(
      params => {
        const id = +params['id'];
        this.getTeam(id);
      }
    );

  }

  save() {
    this.submitted = true;
    if (this.teamEditForm.dirty && this.teamEditForm.valid) {
      //copy the form values over the team object values
      let t = Object.assign({}, this.team, this.teamEditForm.value);
      this.teamService.saveTeam(t).subscribe(
        resp => {
          this.resp = resp
          this.router.navigate(['/teams']);
        },
        err => {
        this.err = <any>err
          console.log(err);
        }
      );
    }


  }
  getTeam(id: number) {
    // Get all teams
    this.teamService.getTeam(id)
      .subscribe(
      team => {
        this.team = team
        this.populateForm();
        //console.log(team);
      }, // Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });

  }

  buildForm() {
    this.teamEditForm = this.formBuilder.group({
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

  populateForm() {
    this.teamEditForm.patchValue({
      teamName: this.team.teamName,
      teamNumber: this.team.teamNumber,
      coachFirstName: this.team.coachFirstName,
      coachLastName: this.team.coachLastName,
      coachEmail: this.team.coachEmail,
      altCoachFirstName: this.team.altCoachFirstName,
      altCoachLastName: this.team.altCoachLastName,
      altCoachEmail: this.team.altCoachEmail,
      city: this.team.city,
      state: this.team.state,
    });
  }



}
