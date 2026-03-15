import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PRODUCTS, Product } from '../../models/data';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class ProductsComponent {
  products = PRODUCTS;
  selectedProduct: Product | null = null;
  
  showToast = false;
  toastMessage = '';

  openModal(product: Product) { this.selectedProduct = product; }
  closeModal() { this.selectedProduct = null; }


  addToBag(productTitle: string) {
    this.toastMessage = `${productTitle} added to your collection.`;
    this.showToast = true;
    this.closeModal(); 
    

    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }
}