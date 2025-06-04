import { Component } from '@angular/core';
import { Event } from '@angular/router';

type product = {
  name: string;
  price: number;
  description: string;
  color: string;
  discountPrice: number;
  instock: number;
  imgUrl: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  name: string = 'List';
  
  product: product = {
    name: 'iPhone 14 Pro Max',
    price: 1099.99,
    description: 'The iPhone 14 Pro Max is the latest flagship smartphone from Apple, featuring a stunning Super Retina XDR display, powerful A16 Bionic chip, and advanced camera system for capturing stunning photos and videos.',
    color: 'Deep Purple',
    discountPrice: 6,
    instock: 10,
    imgUrl: 'assets/images/iphone.webp'
  };
  addToCart(product : product) {
    console.log(`Added ${product.name} to cart!`);
    // Here you would typically call a service to handle the cart logic

  }
  changeName(event: any): void{
     const inputValue = (event.target as HTMLInputElement).value;
      this.name = inputValue;
  }
}
