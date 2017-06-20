import { Component, OnInit } from '@angular/core';
import { MatchService } from './match.service';

@Component({
  selector: 'app-match-scoring',
  templateUrl: './match-scoring.component.html',
  styleUrls: ['./match-scoring.component.css'],
  providers: [MatchService]
})


export class MatchScoringComponent implements OnInit {
  title = 'Match';

  constructor(private _matchService: MatchService) { }


  ngOnInit() {
    this.title = this._matchService.someMethod();
  }

}
