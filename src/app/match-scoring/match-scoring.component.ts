import { Component, OnInit } from '@angular/core';

import { MatchService } from './match.service';

@Component({
  selector: 'app-match-scoring',
  providers: [MatchService],
  templateUrl: './match-scoring.component.html',
  styleUrls: ['./match-scoring.component.css']
 
})


export class MatchScoringComponent implements OnInit {
  title = 'Match';



  constructor(private _matchService: MatchService) { }
 
 


  ngOnInit() {
 
  }

  

}
