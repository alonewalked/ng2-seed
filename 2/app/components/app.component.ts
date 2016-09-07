import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
        <a [routerLink]="['/']">Home</a>
        <a [routerLink]="['/product']">Product</a>
        <router-outlet></router-outlet>
    `
})

export class AppComponent {}
