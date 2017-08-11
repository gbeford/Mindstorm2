import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Team } from './model/Team';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Observable';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class TeamService {
    // private url = 'http://mindstorm.herokuapp.com/api/competitions'
    private baseUrl = environment.teamsApiUrl;

    constructor(private http: Http) { }


    // Fetch all teams
    public getTeams(): Observable<Team[]> {
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

    public getTeam(id: number): Observable<Team[]> {
        if (id === 0) {
            // return Observable.of(this.initializeTeam());
        }
        // ...using get request
        const url = '${this.baseUrl}/${id}';
        const comps = this.http.get(url)
            // ...and calling .json() on the response to return data
            .map((res: Response) =>
                res.json()
            )
       // .do(data => console.log('getProduct: ' + JSON.stringify(data)))
        .catch(this.handleError);
       // console.log(comps);
        return comps;
        // ...errors if any
    }

    // Add a new comment
    addTeam(team: Team): Observable<Team> {
        console.log(team);
        const bodyString = JSON.stringify(team); // Stringify payload
        const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        const options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.baseUrl, bodyString, options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')
            // ...and calling .json() on the response to return data
            // ...errors if any
            );
    }

    // Update a comment
    updateTeam(team: Team): Observable<Team> {
        const bodyString = JSON.stringify(team); // Stringify payload
        const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        const options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.put(`${this.baseUrl}/${team['id']}`, team, options) // ...using put request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
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


    initializeTeam(): Team {
        // Return an initialized object
        return {
            teamId: 0,
            teamName: null,
            teamNumber: null,
            coachFirstName: null,
            coachlastName: null,
            coachEmail: null,
            altCoachFirstName: null,
            altCoachlastName: null,
            altCoachEmail: null,
            city: null,
            state: null,
            competitionID: null,
        }
    }
}
