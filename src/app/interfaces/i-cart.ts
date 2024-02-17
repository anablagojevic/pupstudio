import { IProduct } from "./i-products";

export interface ICart {
    id: number;
    product: IProduct;
    quantity: number;
}
