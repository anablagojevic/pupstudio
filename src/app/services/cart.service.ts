import { Injectable, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/i-products';
import { ICart } from '../interfaces/i-cart';

@Injectable({
  providedIn: 'root'
})
export class CartService{

  private localStorageKey = 'cartItems';
  private cartItems: ICart[]=[];

  constructor() {
    const storedCartItems = localStorage.getItem(this.localStorageKey);

    if(storedCartItems) {
      this.cartItems = JSON.parse(storedCartItems);
    }
  }

  private saveToLocalStorage(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
  }

  addToCart(product: IProduct): void {

    const existingItem = this.cartItems.find(item => item.id === product.id);

    if(existingItem) {
      existingItem.quantity++;
    } 
    else {
      this.cartItems.push({ id: product.id, product, quantity: 1 });
    }

    this.saveToLocalStorage();
  }

  removeFromCart(item: ICart): void {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.saveToLocalStorage();
    }
  }

  getCartItems(): ICart[] {
    return this.cartItems;
  }

  calculateTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

}
