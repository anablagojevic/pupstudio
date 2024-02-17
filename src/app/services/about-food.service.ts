import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IAboutFood } from '../interfaces/i-about-food';

@Injectable({
  providedIn: 'root'
})
export class AboutFoodService {

  private _url: string = '/assets/data/about-food.json';
  constructor(private http: HttpClient) { }

  getAbouts(): Observable<IAboutFood[]>{
    return this.http.get<IAboutFood[]>(this._url)
    .pipe
      (catchError(error => {
        return throwError(() => error.error)
      })
    );
  }
}
