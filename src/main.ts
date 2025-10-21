import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



//   navbar
  document.addEventListener('DOMContentLoaded', () => {
    const navbarToggle = document.getElementById('navbarToggle') as HTMLButtonElement | null;
    const navbarNav = document.getElementById('navbarNav') as HTMLElement | null;

    if (navbarToggle && navbarNav) {
        navbarToggle.addEventListener('click', () => {
            navbarNav.classList.toggle('show');
        });
    }
});

// Navbar Scroll bottom border
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar') as HTMLElement | null;

    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    }
});
