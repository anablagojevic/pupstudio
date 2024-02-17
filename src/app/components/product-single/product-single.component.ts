import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/i-products';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.css']
})
export class ProductSingleComponent {

  public product: IProduct;
  public showDescription: boolean = false;
  public addedToCart: string = "Add to cart";

  constructor(private route: ActivatedRoute, private _productService: ProductsService, private _cartService: CartService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {

      const productId = params['id'];

      this._productService.getProducts().subscribe(data => {
        const filteredProducts = data.filter(x => x.id === Number(productId));
        this.product = filteredProducts[0];
      })
    });
  }

  toggleDescription() {
    this.showDescription = !this.showDescription;
  }

  addToCart(product: IProduct): void {
    this.addedToCart = "Added to cart";
    this._cartService.addToCart(product);
  }
}
