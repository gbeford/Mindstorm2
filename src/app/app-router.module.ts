import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatchScoringComponent } from "app/match-scoring/match-scoring.component";
import { PageNotFoundComponent } from "app/page-not-found/page-not-found.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'match', component: MatchScoringComponent },
      { path: '**', component: PageNotFoundComponent }
    ]),
  ]
})
export class AppRouterModule { }
