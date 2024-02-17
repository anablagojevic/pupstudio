import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ITeam } from '../interfaces/i-team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private _url: string = '/assets/data/team.json';
  constructor(private http: HttpClient) { }

  getTeam(): Observable<ITeam[]>{
    return this.http.get<ITeam[]>(this._url)
    .pipe
      (catchError(error => {
        return throwError(() => error.error)
      })
    );
  }
}
