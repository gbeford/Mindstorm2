import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ITeam } from './model/team';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Observable';
// Import RxJs required methods
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';



@Injectable()
export class TeamService {
    // private url = 'http://mindstorm.herokuapp.com/api/competitions'
    private baseUrl = environment.teamsApiUrl;

    constructor(private http: Http) { }


    // Fetch all teams
    public getTeams(): Observable<ITeam[]> {
        // ...using get request
        const comps = this.http.get(this.baseUrl)
            // ...and calling .json() on the response to return data
            .map((res: Response) =>
                res.json()
            )
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
        console.log(comps);
        return comps;
        // ...errors if any
    }

    public getTeam(id: number): Observable<ITeam> {
        if (id === 0) {
            return Observable.of(this.initializeTeam());
        }
        // ...using get request
        const url = `${this.baseUrl}/${id}`;
        const comps = this.http.get(url)
            // ...and calling .json() on the response to return data
            .map((res: Response) =>
                res.json()
            )
            .catch(this.handleError);
        // console.log(comps);
        return comps;
        // ...errors if any
    }

    saveTeam(team: ITeam): Observable<ITeam> {
        if (team.teamId === 0) {
            return this.addTeam(team);
        }
        return this.updateTeam(team);
    }

    // Add a new comment
    addTeam(team: ITeam): Observable<ITeam> {
        console.log(team);
        const bodyString = JSON.stringify(team); // Stringify payload
        const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        const options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.baseUrl, bodyString, options) // ...using post request
            .map((res: Response) => res.json())
            .catch(this.handleError); // ...errors if any
    }

    // Update a comment
    updateTeam(team: ITeam): Observable<ITeam> {
        const bodyString = JSON.stringify(team); // Stringify payload
        const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        const options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.put(`${this.baseUrl}/${team['teamId']}`, team, options) // ...using put request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch(this.handleError); // ...errors if any
    }

    // Delete a comment
    // removeComment(id: string): Observable<Comment[]> {
    //     return this.http.delete(`${this.commentsUrl}/${id}`) // ...using put request
    //         .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
    //         .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    // }

    private handleError(error: Response): Observable<any> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


    initializeTeam(): ITeam {
        // Return an initialized object
        return {
            teamId: 0,
            teamName: null,
            teamNumber: null,
            coachFirstName: null,
            coachLastName: null,
            coachEmail: null,
            altCoachFirstName: null,
            altCoachLastName: null,
            altCoachEmail: null,
            city: null,
            state: null,
            competitionID: null,
        }
    }
}
