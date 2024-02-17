import { Component, OnInit } from '@angular/core';
import { ICart } from 'src/app/interfaces/i-cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  public cartItems: ICart[] = [];

  constructor(private _cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this._cartService.getCartItems();
  }

  removeFromCart(item: ICart): void {
    this._cartService.removeFromCart(item);
    this.cartItems = this._cartService.getCartItems();
  }

  calculateTotal(): number {
    return this._cartService.calculateTotal();
  }

}
