import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { 
  }


  
  
  addProduct(data: any): Observable<any> {
   
    return this.http.post(' https://product-app-74q6.onrender.com/products', data, {
      responseType: 'text'
    });
  }

  getProducts(): Observable<any> {
   
    return this.http.get<any>('https://product-app-74q6.onrender.com/products ', {
    });
  }

  
  



  getProductList(){
     
     return this.http.get<any>('https://product-app-74q6.onrender.com/products ', {
       // Set the authorization header with the token
       
     });
 

  }
  
  
}
