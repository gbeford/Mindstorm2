import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatchService } from './match.service';
import { IMission } from 'app/match/model/mission';
import { SignatureComponent } from './signature/signature.component';

@Component({
  selector: 'app-match-scoring',
  providers: [MatchService],
  templateUrl: './match-scoring.component.html',
  styleUrls: ['./match-scoring.component.css'],
})


export class MatchScoringComponent implements OnInit {

  title = 'Judge Match';
  missions: IMission[];
  public matchScoringForm: FormGroup;
  @ViewChildren(SignatureComponent) public sigs: QueryList<SignatureComponent>;


  constructor(private matchService: MatchService,
    private fb: FormBuilder) { }

  ngOnInit() {
    // Load comments
    this.getMissons();


  }

  getMissons() {
    // Get all teams
    this.matchService.getMission()
      .subscribe(
      missions => {
        this.missions = missions;
        this.matchScoringForm = this.createForm();
      }, // Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });
  }



  createForm() {
    const group = this.fb.group({
      team: [''],
      tableNumber: [''],
      matchNumber: [''],
      signature: ['']
    });

    this.missions.forEach(control =>
      group.addControl(control.missionDescription, this.fb.control(''))
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

    // console.log('CAPTURED SIGS:');
    // console.log(this.sigs.first.signature);


  }

  // getRange(missions){
  //   //console.log(missions);
  //   var ranges = [];
  //   for (var i = 0; i < missions.length; i++) {
  //     for (var r = 0; r < missions[i].missionItems.length; r++) {
  //       //console.log('mission item', missions[i].missionItems[r]);
  //       if (missions[i].missionItems[r].type == "range") {

  //         console.log(missions[i].missionItems[r].maxRange);
  //         for (var x = missions[i].missionItems[r].minRange; x <= missions[i].missionItems[r].maxRange; x++) {
  //           ranges.push(x);
  //         }
  //         console.log('range ', ranges)
  //       }

  //     }

  //   }
  // }



}
