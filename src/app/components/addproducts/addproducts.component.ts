import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product-services.service";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-addproducts',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './addproducts.component.html',
  styleUrl: './addproducts.component.css'
})
export class AddproductsComponent {

  title: string = "Add";
  productList: any = [];
  productForm: FormGroup;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activateRouter:ActivatedRoute
  ) {
    this.productForm = this.formBuilder.group({
      name: ["", Validators.required],
      price: ["", Validators.required],
      category: ["", Validators.required],
      date: ["", Validators.required],
    });
  }
    onSubmit() {

      alert(
        `Brand: ${this.productForm.value.name} Product: ${this.productForm.value.price} Purchased:${this.productForm.value.category}`
      );

      this.productService.addProduct(this.productForm.value).subscribe({
        next:(response:any)=> {
        
          console.log(this.productForm.value);
        },
        error: (error: any) => {
          console.error('There was an error!', error); // Handle any errors
        }
      });


  
  

}
  }