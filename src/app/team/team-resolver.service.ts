import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { TeamService } from './team.service';
import { ITeam } from 'app/team/model/team';


@Injectable()
export class TeamResolver implements Resolve<ITeam> {

    constructor(private TeamService: TeamService,
        private router: Router) { }

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<ITeam> {
        let id = route.params['id'];
        // let id = route.paramMap.get('id');
        if (isNaN(+id)) {
            console.log(`Team id was not a number: ${id}`);
            this.router.navigate(['/teams']);
            return Observable.of(null);
        }
        return this.TeamService.getTeam(+id)
            .map(team => {
                if (team) {
                    console.log('team', team);
                    return team;
                }
                console.log(`Team was not found: ${id}`);
                this.router.navigate(['/team']);
                return null;
            })
            .catch(error => {
                console.log(`Retrieval error: ${error}`);
                this.router.navigate(['/teams']);
                return Observable.of(null);
            });
    }
}

