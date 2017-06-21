import { Component, OnInit } from '@angular/core';

import { MatchService } from './match.service';

@Component({
  selector: 'app-match-scoring',
  //providers: [MatchService],
  templateUrl: './match-scoring.component.html',
  styleUrls: ['./match-scoring.component.css']
 
})


export class MatchScoringComponent implements OnInit {
  title = 'Match';
// public matchItem = {};


  constructor(private _matchService: MatchService) { }
 
  // matchData = [];


  ngOnInit() {
   // this.title = this._matchService.someMethod();
  }

  // saveMatch() {
  //   this._matchService.getmatchData().subscribe(data => this.matchData = data);
  // }

  // private getAllItems(): void {
  //   this._matchService
  //     .GetAll()
  //     .subscribe((data: matchItem[]) => this.myItems = data,
  //     error => console.log(error),
  //     () => console.log('Get all Items complete'));
  // }

}
