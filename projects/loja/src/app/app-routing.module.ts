import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', loadChildren: () => import('./components/products/product-list/product-list.module').then(m => m.ProductListModule) },
  { path: 'product/:id', loadChildren: () => import('./components/products/product-detail/product-detail.module').then(m => m.ProductDetailModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
