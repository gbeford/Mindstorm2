import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
// import { Configuration } from '../app.constants';
// import { AddMissionComponent } from './add-mission.component';
import { environment } from 'environments/environment';
// import { IMatchDefinition } from 'app/match/model/matchDefinition';
import { IMission } from 'app/mission/model/mission';

@Injectable()

export class MissionService {
    // private actionUrl: string;
    // private headers: Headers;


    private baseUrl = environment.missionApiUrl;

    constructor(private http: Http) { }



    saveMission(mission: IMission): Observable<IMission> {
        const bodyString = JSON.stringify(mission); // Stringify payload
        const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        const options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.baseUrl, bodyString, options) // ...using post request
            .map((res: Response) => res.json())
            .catch(this.handleError); // ...errors if any
    }


    private handleError(error: Response): Observable<any> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }




}
