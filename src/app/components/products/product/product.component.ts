import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/i-products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() productData: IProduct;
}
