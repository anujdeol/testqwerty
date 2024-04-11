import { Component } from '@angular/core';
import { ProductService } from '../../services/product-services.service';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  
  products:any=[];
  constructor (private productService:ProductService,private router:Router){

  }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProductList().subscribe({
      next:(response:any)=> {
        this.products = response.payload;
        console.log(this.products);
      },
      error: (error: any) => {
        console.error('There was an error!', error); // Handle any errors
      }
    });




  }
}
