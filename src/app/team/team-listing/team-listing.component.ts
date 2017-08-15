import { Component, OnInit, OnChanges } from '@angular/core';
import { TeamService } from '../team.service';
import { ITeam } from 'app/team/model/team';

@Component({
  selector: 'app-team-listing',
  templateUrl: './team-listing.component.html',
  styleUrls: ['./team-listing.component.css']
})
export class TeamListingComponent implements OnInit, OnChanges {
   teamList: ITeam[];

  constructor(private teamService: TeamService) { }
    title = 'Team List';
  // Local properties

  // Input properties
  // @Input() listId: string;
  // @Input() editId: string;


    // tslint:disable-next-line:member-ordering
    // teamList = [
    // tslint:disable-next-line:max-line-length
    //   { teamId: 1, teamNumber: 467, teamName: 'Colonials', coachFirstName: null, coachLastName: null, coachEmail: 'Carol@shrewsburyrobotics.org', altCoachFirstName: null, altCoachlastName: null, altCoachEmail: null, city: 'Shrewsbury', state: 'MA' },
    //   { teamId: 2, teamNumber: 87, teamName: 'Stars', coachFirstName: null, coachLastName: null, coachEmail: 'Gina@shrews.org', altCoachFirstName: null, altCoachlastName: null, altCoachEmail: null, city: 'Spencer', state: 'MA' },
    // tslint:disable-next-line:max-line-length
    //   { teamId: 3, teamNumber: 984, teamName: 'Sharks', coachFirstName: 'Bob', coachLastName: null, coachEmail: null, altCoachFirstName: null, altCoachlastName: null, altCoachEmail: null, city: null, state: null }
    // ]

  ngOnInit() {
    // Load comments
    this.getList()
  }

  getList() {
    // Get all teams
    this.teamService.getTeams()
      .subscribe(
      teamList => this.teamList = teamList, // Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });
  }

  ngOnChanges(changes: any) {
    this.getList();
  }

}
