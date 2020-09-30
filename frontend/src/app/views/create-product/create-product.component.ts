import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Product } from './../../shared/model/product.model';

// Services
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})

export class CreateProductComponent implements OnInit {
  product: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto Criado!');
      this.router.navigate(['/']);
    });
  }

  cancel(): void {
    this.router.navigate(['/'])
  }
}
