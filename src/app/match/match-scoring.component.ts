import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatchService } from './match.service';
import { IMatchDefinition } from 'app/match/model/matchDefinition';

@Component({
  selector: 'app-match-scoring',
  providers: [MatchService],
  templateUrl: './match-scoring.component.html',
  styleUrls: ['./match-scoring.component.css']
})


export class MatchScoringComponent implements OnInit {
  title = 'Match';
 definitions: IMatchDefinition[];
 public matchScoringForm: FormGroup;

  constructor(private matchService: MatchService,
              private fb: FormBuilder) { }


  ngOnInit() {
    // Load comments
    this.getList();
  }

  getList() {
    // Get all teams
    this.matchService.getDefinition()
    .subscribe(
      definitions => {
        this.definitions = definitions;
        this.matchScoringForm = this.createForm();
        }, // Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });
  }

  createForm() {
    const group = this.fb.group({});
    this.definitions.forEach(control =>
      group.addControl(control.MissionDescription, this.fb.control(''))
    );
    return group;
  }

  save() {
    // this.submitted = true;
    // if (this.teamEditForm.dirty && this.teamEditForm.valid) {
    //   //copy the form values over the team object values
    //   let t = Object.assign({}, this.team, this.teamEditForm.value);
    //   this.teamService.saveTeam(t).subscribe(
    //     resp => {
    //       this.resp = resp
    //       this.router.navigate(['/teams']);
    //     },
    //     err => {
    //       this.err = <any>err
    //       console.log(err);
    //     }
    //   );
    // }
  }

}
