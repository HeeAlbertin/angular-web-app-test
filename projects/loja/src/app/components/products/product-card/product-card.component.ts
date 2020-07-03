import { Component, OnInit, Input } from '@angular/core';
import { ProductsModel } from '../products.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: ProductsModel | undefined;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToDetails(productId: number) {
    this.router.navigate(['product', productId]);
  }

}
