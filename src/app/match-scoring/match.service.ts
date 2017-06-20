import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../app.constants';
import { MatchScoringComponent } from './match-scoring.component';

@Injectable()

export class MatchService {
    private actionUrl: string;
    private headers: Headers;

    // constructor(
    //     private http: Http
    // ) { } 

    // getUser() {
    //     return this.http.get(`https://conduit.productionready.io/api/profiles/eric`)
    //         .map((res: Response) => res.json());
    // }
    constructor(private _http: Http, private _configuration: Configuration) {

        this.actionUrl = _configuration.ServerWithApiUrl + 'myItem/';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    // public GetAll = (): Observable<matchItem[] => {
    //     return this._http.get(this.actionUrl)
    //         .map((response: Response) => <matchItem[]>response.json())
    //         .catch(this.handleError);
    // }

    // public GetSingle = (id: number): Observable<matchItem> => {
    //     return this._http.get(this.actionUrl + id)
    //         .map((response: Response) => <matchItem>response.json())
    //         .catch(this.handleError);
    // }

    // public Add = (itemName: string): Observable<matchItem> => {
    //     let toAdd = JSON.stringify({ ItemName: itemName });

    //     return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
    //         .map((response: Response) => <matchItem>response.json())
    //         .catch(this.handleError);
    // }

    // public Update = (id: number, itemToUpdate: matchItem): Observable<matchItem> => {
    //     return this._http.put(this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: this.headers })
    //         .map((response: Response) => <matchItem>response.json())
    //         .catch(this.handleError);
    // }

    public Delete = (id: number): Observable<Response> => {
        return this._http.delete(this.actionUrl + id)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}

}