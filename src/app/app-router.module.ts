import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatchScoringComponent } from 'app/match-scoring/match-scoring.component';
import { PageNotFoundComponent } from 'app/page-not-found/page-not-found.component';
import { TeamListingComponent } from 'app/team-listing/team-listing.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'match', component: MatchScoringComponent },
      { path: 'teamList', component: TeamListingComponent },
      { path: '**', component: PageNotFoundComponent }
    ]),
  ],
  exports: [RouterModule]
})
export class AppRouterModule { }
