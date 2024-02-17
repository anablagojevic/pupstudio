import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IServices } from '../interfaces/i-services';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private _url: string = '/assets/data/services.json';
  constructor(private http: HttpClient) { }

  getServices(): Observable<IServices[]>{
    return this.http.get<IServices[]>(this._url)
    .pipe
      (catchError(error => {
        return throwError(() => error.error)
      })
    );
  }
}
