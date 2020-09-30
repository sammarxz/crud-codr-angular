import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

// Services
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})

export class CreateProductComponent implements OnInit {
  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.showMessage('Hello form service');
  }

  cancel(): void {
    this.router.navigate(['/'])
  }
}
