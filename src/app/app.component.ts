import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from "./components/products/products.component";
import { AddproductsComponent } from "./components/addproducts/addproducts.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ProductsComponent, AddproductsComponent]
})
export class AppComponent {
  title = 'quiz4';
}
