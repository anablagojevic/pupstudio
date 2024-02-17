import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPet } from '../interfaces/i-pets';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private _url: string = '/assets/data/pets.json';
  constructor(private http: HttpClient) { }

  getPets(): Observable<IPet[]>{
    return this.http.get<IPet[]>(this._url)
    .pipe
      (catchError(error => {
        return throwError(() => error.error)
      })
    );
  }
}
