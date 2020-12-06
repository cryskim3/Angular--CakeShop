import { Component, Input, OnInit } from '@angular/core';
import { CartItemService } from 'src/app/services/cart-item.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css'],
})
export class ProductItemsComponent implements OnInit {
  @Input() productItem: Product;

  constructor(private data: CartItemService) {}

  ngOnInit(): void {}

  addToCart() {
    this.data.sendData(this.productItem);
  }
}
