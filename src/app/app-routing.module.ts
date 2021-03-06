import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatchScoringComponent } from 'app/match/match-scoring.component';
import { PageNotFoundComponent } from 'app/page-not-found/page-not-found.component';
// import { TeamListingComponent } from 'app/team/team-listing/team-listing.component';
import { HomeComponent } from 'app/home/home.component';
import { AddMissionComponent } from './mission/add-mission/add-mission.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },

      {
        path: 'teams',
        loadChildren: 'app/team/team.module#TeamModule'
      },
      { path: 'match', component: MatchScoringComponent },
      { path: 'addMission', component: AddMissionComponent },
      // { path: 'teamList', component: TeamListingComponent },
      // { path: 'matchHard', component: MatchScoringComponent },
      { path: '**', component: PageNotFoundComponent }
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
