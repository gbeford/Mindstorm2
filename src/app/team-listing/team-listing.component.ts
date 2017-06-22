import { Component, OnInit } from '@angular/core';
import { TeamListingService } from './team-listing.service';
import { TeamList } from "app/team-listing/model/teamList";

@Component({
  selector: 'app-team-listing',
  providers: [TeamListingService],
  templateUrl: './team-listing.component.html',
  styleUrls: ['./team-listing.component.css']
})
export class TeamListingComponent implements OnInit {

  constructor(private teamListService: TeamListingService) { }

  // Local properties
  teamList: TeamList[];

  // Input properties
  // @Input() listId: string;
  // @Input() editId: string;


  ngOnInit() {
    // Load comments
    this.loadList()
  }

  loadList() {
    // Get all teams
    this.teamListService.getTeamListAll()
      .subscribe(
      teamList => this.teamList = teamList, //Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });
  }

  ngOnChanges(changes: any) {
    this.loadList();
  }

}
