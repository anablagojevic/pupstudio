import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { AuthorComponent } from './components/author/author.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductSingleComponent } from './components/product-single/product-single.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: "",
        pathMatch: "full"
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'product-single/:id',
        component: ProductSingleComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'author',
        component: AuthorComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: '**',
        component: NotfoundComponent
    }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
