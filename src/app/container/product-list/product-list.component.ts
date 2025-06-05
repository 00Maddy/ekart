import { Component } from '@angular/core';
import { products } from '../../../assets/data'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: any[] = products;
}
