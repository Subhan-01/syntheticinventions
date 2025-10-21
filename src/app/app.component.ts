// import { Component , HostListener ,OnInit} from '@angular/core';
// import { Router, NavigationEnd } from '@angular/router';


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Synthetic_Inventions';

//   @HostListener('window:scroll', [])
//   onWindowScroll() {
//     const navbar = document.getElementById('navbar');
//     if (window.scrollY > 50) {
//       navbar?.classList.add('navbar-scrolled');
//     } else {
//       navbar?.classList.remove('navbar-scrolled');
//     }
//   }

//   constructor(private router: Router) { }

//   ngOnInit() {
//     this.router.events.subscribe((event) => {
//       if (event instanceof NavigationEnd) {
//         window.scrollTo(0, 0); // Scroll to the top of the page
//       }
//     });
//   }



// }

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Synthetic_Inventions';
  isLoading = true; // Variable to track loader visibility

  constructor(private router: Router) { }

  ngOnInit() {
    // Hide the loader when the page is fully loaded
    window.addEventListener('load', () => {
      this.isLoading = false; // Hide loader
    });

    // Scroll to the top on navigation end
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }
    });
  }

  scrollToElement(element: HTMLElement) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
}
