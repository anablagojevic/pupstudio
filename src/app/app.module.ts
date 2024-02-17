import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/fixed/header/header.component';
import { FixedComponent } from './components/fixed/fixed.component';
import { FooterComponent } from './components/fixed/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AnimalsComponent } from './components/home/animals/animals.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutFoodComponent } from './components/home/about-food/about-food.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { TeamComponent } from './components/about/team/team.component';
import { ProductComponent } from './components/products/product/product.component';
import { AuthorComponent } from './components/author/author.component';
import { ProductSingleComponent } from './components/product-single/product-single.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FixedComponent,
    FooterComponent,
    HomeComponent,
    AnimalsComponent,
    AboutFoodComponent,
    AboutComponent,
    ProductsComponent,
    TeamComponent,
    ProductComponent,
    AuthorComponent,
    ProductSingleComponent,
    NotfoundComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbDropdownModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
