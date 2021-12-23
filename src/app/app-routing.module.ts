import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';


const routes: Routes = [
  {path:'manage_product',component:ManageProductComponent},
  {path:'manage_category',component:ManageCategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
