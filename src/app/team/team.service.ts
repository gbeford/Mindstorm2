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
    private url = environment.teamsApiUrl;

    constructor(private http: Http) { }

    // Fetch all teams
    public getTeamListAll(): Observable<Team[]> {
        // ...using get request
        const comps = this.http.get(this.url)
            // ...and calling .json() on the response to return data
            .map((res: Response) =>
                res.json()
            )
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
            console.log(comps);
        return comps;
        // ...errors if any

    }

    // Add a new comment
    addTeam(team: Team): Observable<Team> {
        console.log(team);
        const bodyString = JSON.stringify(team); // Stringify payload
        const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        const options = new RequestOptions({ headers: headers }); // Create a request option

         return this.http.post(this.url, bodyString, options) // ...using post request
                .map((res: Response) => res.json());
                // ...and calling .json() on the response to return data
                // ...errors if any
            // .catch((error: any) => Observable.throw(error.json().error || 'Server error')
  // );
    }

    // Update a comment
    // updateComment(body: Object): Observable<Comment[]> {
    //     let bodyString = JSON.stringify(body); // Stringify payload
    //     let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    //     let options = new RequestOptions({ headers: headers }); // Create a request option

    //     return this.http.put(`${this.commentsUrl}/${body['id']}`, body, options) // ...using put request
    //         .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
    //         .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    // }

    // Delete a comment
    // removeComment(id: string): Observable<Comment[]> {
    //     return this.http.delete(`${this.commentsUrl}/${id}`) // ...using put request
    //         .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
    //         .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    // }
}
