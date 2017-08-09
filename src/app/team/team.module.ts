import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeamListingComponent } from './team-listing/team-listing.component';
import { TeamEditComponent } from './team-edit/team-edit.component';
import { TeamService } from './team.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
  ],
  providers: [TeamService]
})
export class TeamModule { }
