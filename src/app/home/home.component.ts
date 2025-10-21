import { Component, OnInit , HostListener } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  
  tabs = [
    { label: 'Who We Are', selected: true, heading: 'About Synthetic Invention', content: 'Synthetic Invention is a dynamic software house offering a range of digital services. Our skilled team is dedicated to driving your business forward with innovative solutions and personalized strategies.' },
    { label: 'What We Do', selected: false, heading: 'Our Services At Synthetic Invention', content: 'We provide digital marketing, web development, SEO, graphic design, app development, and video editing services. Our goal is to help your business succeed online with tailored, results-driven solutions.' },
    { label: 'How We Do It', selected: false, heading: 'Our Process at Synthetic Invention', content: 'Our process involves understanding your needs, strategic planning, and collaborative execution. We focus on delivering high-quality results that align with your business goals.' }
  ];

  selectTab(selectedTab: { label: string; selected: boolean; heading: string; content: string; }) {
    this.tabs.forEach(tab => tab.selected = false);
    selectedTab.selected = true;
  }

   
currentPortfolioTab = 'website';
websiteImages = [
    { src: 'assets/portfolioimages/homeWebsitePortfolio1.jpg', alt: 'Website' },
    { src: 'assets/portfolioimages/homeWebsitePortfolio2.jpg', alt: 'Website' },
    { src: 'assets/portfolioimages/homeWebsitePortfolio3.jpg', alt: 'Website' },
];
logoImages = [
    { src: 'assets/img/homePortfolioLogo1.png', alt: 'Onic' },
    { src: 'assets/img/homePortfolioLogo2.png', alt: 'Marcgive' },
    { src: 'assets/img/homePortfolioLogo3.png', alt: 'Royal Life' }
];
videoEditingVideos = [
  { src: 'assets/videos/portfolioVideo1.mp4', alt: 'Videos', type: 'video/mp4' },
  { src: 'assets/videos/portfolioVideo2.mp4', alt: 'Videos', type: 'video/mp4' },
  { src: 'assets/videos/portfolioVideo3.mp4', alt: 'Videos', type: 'video/mp4' },

];

currentMediaIndex: number | null = null;
currentMediaType: 'image' | 'video' | null = null;


getCurrentMedia() {
    switch (this.currentPortfolioTab) {
        case 'website':
            return this.websiteImages;
        case 'logo':
            return this.logoImages;
        case 'videoEditing':
            return this.videoEditingVideos;
        default:
            return [];
    }
}

selectPortfolioTab(tab: string) {
    this.currentPortfolioTab = tab;
    this.currentMediaIndex = null; // Reset index when switching tabs
}

isModalVisible: boolean = false;

  ngOnInit(): void {
    // Check localStorage if modal has been shown
    if (!localStorage.getItem('modalShown')) {
      this.isModalVisible = true; // Show the modal
      localStorage.setItem('modalShown', 'true'); // Set flag in localStorage
    }
  }

  // Close modal on close button click
  closeModal() {
    this.isModalVisible = false;
  }

  // Close modal when clicking outside of the modal-content box
  @HostListener('window:click', ['$event'])
  onWindowClick(event: Event) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('modal')) {
      this.closeModal(); // Close modal if clicked on the modal background
    }
  }
}

      
  

