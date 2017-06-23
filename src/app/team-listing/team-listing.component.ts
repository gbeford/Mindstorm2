import { Component, OnInit } from '@angular/core';
import { TeamListingService } from './team-listing.service';
import { TeamList } from './model/TeamList';

@Component({
  selector: 'app-team-listing',
  providers: [TeamListingService],
  templateUrl: './team-listing.component.html',
  styleUrls: ['./team-listing.component.css']
})
export class TeamListingComponent implements OnInit {
  teamList: TeamList[];

  constructor(private teamListService: TeamListingService) { }

  // Local properties

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
      teamList => this.teamList = teamList, // Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });
  }

  ngOnChanges(changes: any) {
    this.loadList();
  }

}
