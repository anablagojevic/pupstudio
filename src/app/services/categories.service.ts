import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ICategory } from '../interfaces/i-categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private _url : string = '/assets/data/categories.json';
  constructor(private http: HttpClient) { }

  getCategories(): Observable<ICategory[]>{
    return this.http.get<ICategory[]>(this._url)
    .pipe(
      catchError(error => {
        return throwError(() => error.error)
      }) 
    );
  }

  getCategoryName(categoryId: number): Observable<string> {
    return this.getCategories().pipe(
      map(categories => {
        const category = categories.find(cat => cat.id === categoryId);
        return category ? category.name : '';
      })
    );
  }
}
