import { Injectable } from '@angular/core';
import { Product } from '../product/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    new Product(
      1,
      'Raspberry Cake',
      45.0,
      '6 inch',
      './assets/images/cake1.jpg', 'Fresh raspberry with yogurt cream'
    ),
    new Product(2, 'Macaron Cake', 55.0, '6 inch', './assets/images/cake7.jpg', '8 pieces maracon on the top with buttercream icing'),
    new Product(
      3,
      'Oreo choco Cake',
      40.0,
      '6 inch',
      './assets/images/cake2.jpg', 'Oreo cookie crumbs with creamcheese whipped cream'
    ),
    new Product(
      4,
      'Fruity cupcakes',
      50.0,
      '6 pieces ',
      './assets/images/cup2.jpg', 'Seasonal fresh fruits with whipped cream'
    ),
    new Product(
      5,
      'Strawberry cupcakes',
      35.0,
      '5 pieces',
      './assets/images/cup3.jpg', 'Fresh strawberry with chocolate mousse'
    ),
    new Product(
      6,
      'Butter Icing Flower cupcakes',
      50.0,
      '5 pieces',
      './assets/images/cup1.jpg', 'Almond flour based cupcake with buttercream icing'
    ),
    new Product(
      7,
      'Blackberry Cake',
      50.0,
      '6 inch',
      './assets/images/cake4.jpg', 'Fresh Organic blackberry with buttercream'
    ),
    new Product(
      8,
      'Birthday Cake',
      40.0,
      '6 inch',
      './assets/images/cake5.jpg', 'Lactose free whipped cream'
    ),
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
}
