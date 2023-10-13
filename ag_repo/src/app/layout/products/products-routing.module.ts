import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProductsComponent } from './products.component';

const routes : Routes = [
  {
    path: "", component:ProductsComponent
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule]
 
})
export class ProductsRoutingModule { }
