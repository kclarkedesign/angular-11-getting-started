import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  onSubmit(): void {
    // process checkout data here
    const cartDetails = {
      customer: {
        address: this.checkoutForm.value.address,
        name: this.checkoutForm.value.name
      },
      items: this.items
    };
    console.warn('Your order has been submitted', cartDetails);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit() {}
}
