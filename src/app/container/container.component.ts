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
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  name: string = 'List';
}
