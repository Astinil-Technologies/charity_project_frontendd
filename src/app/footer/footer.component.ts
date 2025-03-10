import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  
})
export class FooterComponent {

  accepted: boolean = false;

  closeBanner() {
    if (this.accepted) {
      // Hide the banner (you can also use localStorage to remember the choice)
      document.querySelector('.fixed')?.classList.add('hidden');
    } else {
      alert('Please accept cookies to continue.');
    }
  }

}
