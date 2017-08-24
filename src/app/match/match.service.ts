import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
// import { Configuration } from '../app.constants';
import { MatchScoringComponent } from './match-scoring.component';
import { environment } from 'environments/environment';
//import { IMatchDefinition } from 'app/match/model/matchDefinition';
import { IMission } from 'app/match/model/mission';

@Injectable()

export class MatchService {
    // private actionUrl: string;
    // private headers: Headers;


    private baseUrl = environment.missionApiUrl;

        constructor(private http: Http) { }


        // Fetch all teams
        public getMission(): Observable<IMission[]> {
            // ...using get request
            const comps = this.http.get(this.baseUrl)
                // ...and calling .json() on the response to return data
                .map((res: Response) =>
                    res.json()
                )
                .catch(this.handleError); // ...errors if any
           // console.log(comps);
            return comps;
            // ...errors if any
        }



        private handleError(error: Response): Observable<any> {
            // in a real world app, we may send the server to some remote logging infrastructure
            // instead of just logging it to the console
            console.error(error);
            return Observable.throw(error.json().error || 'Server error');
        }




    }
