import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.css'
})
export class DonateComponent {

  donation = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    amount: null,
    message: ''
  };

  onSubmit() {
    console.log('Donation Data:', this.donation);
    alert('Donation submitted successfully!');
  }

}
