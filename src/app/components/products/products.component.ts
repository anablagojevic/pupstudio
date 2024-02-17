import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/i-products';
import { ProductsService } from 'src/app/services/products.service';
import { ICategory } from 'src/app/interfaces/i-categories';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  public products: IProduct[]=[];
  public categories: ICategory[]=[];
  public filteredProducts: IProduct[]=[];
  public selectedCategoryId: number = 0;

  constructor(private _products: ProductsService, private _categories: CategoriesService) { }

  ngOnInit(): void {
    this._products.getProducts().subscribe(data => {
      this.products = data;
      this.filteredProducts = data;
    });
    this._categories.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  filterProductsByCategory() {
    if(this.selectedCategoryId != 0) {
      this.filteredProducts = this.products.filter(data => data.categoryId == this.selectedCategoryId);
    } 
    else {
      this.filteredProducts = this.products;
    }
  }
}
