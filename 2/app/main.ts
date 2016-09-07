import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// route
import { routing } from './components/app.routing';

// component
import { AppComponent } from './components/app.component';
import { HomeComponent } from "./components/home";
import { ProductDetailComponent } from "./components/product";

@NgModule({
    imports: [ BrowserModule, routing ],
    declarations: [ AppComponent, HomeComponent, ProductDetailComponent],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [ AppComponent ]
})

class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
