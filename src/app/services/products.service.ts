import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { IProduct } from '../interfaces/i-products';
import { CategoriesService } from './categories.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _url: string = '/assets/data/products.json';
  constructor(private http: HttpClient, private categoriesService: CategoriesService) { }

  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this._url)
    .pipe
      (catchError(error => {
        return throwError(() => error.error)
      })
    );
  }

  getProductsByCategoryId(categoryId: number): Observable<IProduct[]> {
    return this.getProducts().pipe(
      map(products => products.filter(product => product.categoryId === categoryId))
    );
  }

  getCategoryNameById(categoryId: number): Observable<string> {
    return this.categoriesService.getCategories().pipe(
      map(categories => {
        const category = categories.find(cat => cat.id === categoryId);
        return category ? category.name : 'Unknown';
      })
    );
  }

}
