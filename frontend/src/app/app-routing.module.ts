import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { CreateProductComponent } from './views/create-product/create-product.component';
 
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'add-product',
    component: CreateProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
