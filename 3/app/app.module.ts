import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// route
import { routing } from './components/app.routing';

// component
import { AppComponent } from './components/app.component';
import { HomeComponent } from "./components/home";
import { ProductDetailComponent } from "./components/product";
import ProductItemComponent from "./components/product-item";
import CarouselComponent from './components/carousel';

// service
import {ProductService} from "./services/product-service";

@NgModule({
    imports: [ BrowserModule, routing ],
    declarations: [
        AppComponent,
        HomeComponent,
        ProductItemComponent,
        ProductDetailComponent,
        CarouselComponent
    ],
    providers: [ProductService,
        {provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [ AppComponent ]
})

export class AppModule { };
