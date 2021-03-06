import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

// Model
import { Product } from './../model/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  baseUrl = 'http://localhost:3001/products';

  constructor(private snackBar: MatSnackBar,
              private http: HttpClient) { }

  showMessage(msg: string):void {
    this.snackBar.open(msg, '', {
       duration: 3000,
       horizontalPosition: 'right',
       verticalPosition: 'bottom'
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }
}
