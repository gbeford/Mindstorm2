import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TeamListingComponent } from './team-listing/team-listing.component';
import { TeamEditComponent } from './team-edit/team-edit.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: TeamListingComponent },
      {
        // path: ':id/edit',
        path: 'edit',
        component: TeamEditComponent
      }
    ])
  ],
  declarations: [
    TeamListingComponent,
    TeamEditComponent
  ]
})
export class TeamModule { }
