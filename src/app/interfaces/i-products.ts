export interface IProduct {
    id: number;
    img: {
        path: string;
        alt: string;
    };
    title: string;
    price: number;
    description: string;
    categoryId: number;
}
