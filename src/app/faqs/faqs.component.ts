import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent {
  
  constructor() {}

  ngOnInit(): void {
    // This code runs after the component is initialized
    const acc: HTMLCollectionOf<Element> = document.getElementsByClassName("accordion");
    let i: number;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function (this: HTMLElement) {
        this.classList.toggle("active");
        this.parentElement?.classList.toggle("active");

        const pannel = this.nextElementSibling as HTMLElement;

        if (pannel && pannel.style.display === "block") {
          pannel.style.display = "none";
        } else if (pannel) {
          pannel.style.display = "block";
        }
      });
    }
  }
}
