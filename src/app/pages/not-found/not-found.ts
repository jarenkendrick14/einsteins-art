import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule], 
  
  templateUrl: './not-found.html', 
  styleUrl: './not-found.css'
})
export class NotFoundComponent {
  
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }
}