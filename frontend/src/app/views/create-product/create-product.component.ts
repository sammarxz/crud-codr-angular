import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  propLegal = "Alguma coisa"

  constructor() { }

  ngOnInit(): void {
  }

  fazerAlgo(): void {
    console.log('chamando a função fazerAlgo()');
  }
}
