import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { INavigation } from '../interfaces/i-navigation';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private _url : string = '/assets/data/navigation.json';
  constructor(private http: HttpClient) { }

  getNav(): Observable<INavigation[]>{
    return this.http.get<INavigation[]>(this._url)
    .pipe(
      catchError(error => {
        return throwError(() => error.error)
      }) 
    );
  }
}
