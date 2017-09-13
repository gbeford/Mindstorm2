import { Observable } from 'rxjs/Rx';
import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { TeamService } from '../team.service';
import { ITeam } from 'app/team/model/team';
import { DataSource } from '@angular/cdk/collections';
import { MdSort } from '@angular/material';

@Component({
  selector: 'app-team-listing',
  templateUrl: './team-listing.component.html',
  styleUrls: ['./team-listing.component.css']
})
export class TeamListingComponent implements OnInit, OnChanges {
   teamList: ITeam[];
  dataSource: TableDataSource | null;
  @ViewChild(MdSort) sort: MdSort;

   displayedColumns = ['edit', 'teamName', 'teamNumber'];

  constructor(private teamService: TeamService) { }
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
    // this.getList()
    this.dataSource = new TableDataSource(this.teamService, this.sort);
  }

  // getList() {
  //   // Get all teams
  //   this.teamService.getTeams()
  //     .subscribe(
  //     teamList => this.teamList = teamList, // Bind to view
  //     err => {
  //       // Log errors if any
  //       console.log(err);
  //     });
  // }

  ngOnChanges(changes: any) {
    // this.getList();
  }

}

export class TableDataSource extends DataSource<any> {
  constructor(private teamService: TeamService, private _sort: MdSort) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<ITeam[]> {
    return this.teamService.getTeams();
  }

    /** Returns a sorted copy of the database data. */
    // getSortedData(): ITeam[] {
    //   const data = this.teamService.data.slice();
    //   if (!this._sort.active || this._sort.direction == '') { return data; }

    //   return data.sort((a, b) => {
    //     let propertyA: number|string = '';
    //     let propertyB: number|string = '';

    //     switch (this._sort.active) {
    //       case 'teamName': [propertyA, propertyB] = [a.teamName, b.teamName]; break;
    //       case 'teamNumber': [propertyA, propertyB] = [a.teamNumber, b.teamNumber]; break;

    //     }

    //     let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
    //     let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

    //     return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
    //   });
    // }

  disconnect() {}
}
