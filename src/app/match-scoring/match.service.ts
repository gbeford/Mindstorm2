import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
//import { Configuration } from '../app.constants';
import { MatchScoringComponent } from './match-scoring.component';

@Injectable()

export class MatchService {
    // private actionUrl: string;
    // private headers: Headers;

    constructor(
        private http: Http
    ) { } 

    // getUser() {
    //     return this.http.get(`https://conduit.productionready.io/api/profiles/eric`)
    //         .map((res: Response) => res.json());
    // }
  

}