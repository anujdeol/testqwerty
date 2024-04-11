import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AddproductsComponent } from './components/addproducts/addproducts.component';
export const routes: Routes = [

    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "products", component: ProductsComponent },
    { path: "addProducts", component: AddproductsComponent},
];

