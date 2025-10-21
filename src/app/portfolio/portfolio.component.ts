import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

 currentPortfolioTab = 'website';
 websiteImages = [
   { src: 'assets/portfolioimages/homeWebsitePortfolio7.jpg', alt: 'Website' },
   { src: 'assets/portfolioimages/homeWebsitePortfolio8.jpg', alt: 'Website' },
   { src: 'assets/portfolioimages/homeWebsitePortfolio9.jpg', alt: 'Website' },
   { src: 'assets/portfolioimages/homeWebsitePortfolio10.jpg', alt: 'Website' },
   { src: 'assets/portfolioimages/homeWebsitePortfolio12.jpg', alt: 'Website' },
   { src: 'assets/portfolioimages/homeWebsitePortfolio11.jpg', alt: 'Website' },
   { src: 'assets/portfolioimages/homeWebsitePortfolio4.jpg', alt: 'Website' },
   { src: 'assets/portfolioimages/homeWebsitePortfolio5.jpg', alt: 'Website' },
   { src: 'assets/portfolioimages/homeWebsitePortfolio6.jpg', alt: 'Website' },

 ];
 gamingLogoImages = [
   { src: 'assets/portfolioimages/portfolioImageLogo1.png', alt: 'Gaming Logo' },
   { src: 'assets/portfolioimages/portfolioImageLogo9.png', alt: 'Gaming Logo' },
   { src: 'assets/portfolioimages/portfolioImageLogo4.jpg', alt: 'Gaming Logo' },
   { src: 'assets/portfolioimages/portfolioImageLogo3.png', alt: 'Gaming Logo' },
   { src: 'assets/portfolioimages/portfolioImageLogo2.jpg', alt: 'Gaming Logo' },
   { src: 'assets/portfolioimages/portfolioImageLogo5.png', alt: 'Gaming Logo' },
   { src: 'assets/portfolioimages/portfolioImageLogo6.jpg', alt: 'Gaming Logo' },
   { src: 'assets/portfolioimages/portfolioImageLogo7.jpg', alt: 'Gaming Logo' },
   { src: 'assets/portfolioimages/portfolioImageLogo8.jpg', alt: 'Gaming Logo' },
 ];
 logoImages=[
  { src: 'assets/portfolioimages/logoPortfolio1.jpg', alt: 'Logo' },
  { src: 'assets/portfolioimages/logoPortfolio2.jpg', alt: 'Logo' },
  { src: 'assets/portfolioimages/logoPortfolio3.jpg', alt: 'Logo' },
  { src: 'assets/portfolioimages/logoPortfolio4.jpg', alt: 'Logo' },
  { src: 'assets/portfolioimages/logoPortfolio5.jpg', alt: 'Logo' },
  { src: 'assets/portfolioimages/logoPortfolio6.jpg', alt: 'Logo' },
  { src: 'assets/portfolioimages/logoPortfolio7.jpg', alt: 'Logo' },
  { src: 'assets/portfolioimages/logoPortfolio8.jpg', alt: 'Logo' },
  { src: 'assets/portfolioimages/logoPortfolio9.jpg', alt: 'Logo' },
  { src: 'assets/portfolioimages/logoPortfolio10.jpg', alt: 'Logo' },
  { src: 'assets/portfolioimages/logoPortfolio11.jpg', alt: 'Logo' },
  { src: 'assets/portfolioimages/logoPortfolio12.jpg', alt: 'Logo' },

 ]
 bannerImages = [
   { src: 'assets/portfolioimages/bannerPortfolio1.jpeg', alt: 'Banner' },
   { src: 'assets/portfolioimages/bannerPortfolio2.jpeg', alt: 'Banner' },
   { src: 'assets/portfolioimages/bannerPortfolio3.jpeg', alt: 'Banner' },
   { src: 'assets/portfolioimages/bannerPortfolio4.jpg', alt: 'Banner' },
   { src: 'assets/portfolioimages/bannerPortfolio5.jpg', alt: 'Banner' },
   { src: 'assets/portfolioimages/bannerPortfolio6.jpeg', alt: 'Banner' },
   { src: 'assets/portfolioimages/bannerPortfolio7.png', alt: 'Banner' },
   { src: 'assets/portfolioimages/bannerPortfolio8.png', alt: 'Banner' },
   { src: 'assets/portfolioimages/bannerPortfolio9.png', alt: 'Banner' },
 ];
//  overlays
 overlayVideo= [
  { src: 'assets/portfoliovideos/overlayPortfolio1.mp4', alt: 'overlay', type: 'video/mp4' },
  { src: 'assets/portfoliovideos/overlayPortfolio2.mp4', alt: 'overlay', type: 'video/mp4' },
  { src: 'assets/portfoliovideos/overlayPortfolio3.mp4', alt: 'overlay', type: 'video/mp4' },
  { src: 'assets/portfoliovideos/overlayPortfolio4.mp4', alt: 'overlay', type: 'video/mp4' },
  { src: 'assets/portfoliovideos/overlayPortfolio5.mp4', alt: 'overlay', type: 'video/mp4' },
  { src: 'assets/portfoliovideos/overlayPortfolio6.mp4', alt: 'overlay', type: 'video/mp4' },
  
 ]

//  packs
 packVideo=[
  { src: 'assets/portfoliovideos/packPortfolio1.mp4', alt: 'pack', type: 'video/mp4' },
  { src: 'assets/portfoliovideos/packPortfolio2.mp4', alt: 'pack', type: 'video/mp4' },
  { src: 'assets/portfoliovideos/packPortfolio3.mp4', alt: 'pack', type: 'video/mp4' },
  { src: 'assets/portfoliovideos/packPortfolio4.mp4', alt: 'pack', type: 'video/mp4' },
  { src: 'assets/portfoliovideos/packPortfolio5.mp4', alt: 'pack', type: 'video/mp4' },
  { src: 'assets/portfoliovideos/packPortfolio6.mp4', alt: 'pack', type: 'video/mp4' },
 ]

//  emotes
emotesVideo=[
  { src: 'assets/portfoliovideos/emotePortfolioVideo1.mp4', alt: 'emote', type: 'video/mp4' },
  { src: 'assets/portfoliovideos/emotePortfolioVideo2.mp4', alt: 'emote', type: 'video/mp4' },
]

emotesImages=[
  { src: 'assets/portfolioimages/emotePortfolio1.jpeg', alt: 'emote' },
  { src: 'assets/portfolioimages/emotePortfolio2.png', alt: 'emote' },
  { src: 'assets/portfolioimages/emotePortfolio3.png', alt: 'emote' },
  { src: 'assets/portfolioimages/emotePortfolio4.png', alt: 'emote' },
 
]

// thumnails
thumnailVideos=[

  { src: 'assets/portfoliovideos/thumnailPortfolioVideo4.mp4', alt: 'thumnail', type: 'video/mp4' },
  { src: 'assets/portfoliovideos/thumnailPortfolioVideo5.mp4', alt: 'thumnail', type: 'video/mp4' },
  { src: 'assets/portfoliovideos/thumnailPortfolioVideo6.mp4', alt: 'thumnail', type: 'video/mp4' },
  
]

thumnailImages=[
  { src: 'assets/portfolioimages/thumnailPortfolio1.jpeg', alt: 'thumnail' },
  { src: 'assets/portfolioimages/thumnailPortfolio2.jpeg', alt: 'thumnail' },
  { src: 'assets/portfolioimages/thumnailPortfolio3.jpeg', alt: 'thumnail' },
  { src: 'assets/portfolioimages/thumnailPortfolio4.jpeg', alt: 'thumnail' },
  { src: 'assets/portfolioimages/thumnailPortfolio5.png', alt: 'thumnail' },
  { src: 'assets/portfolioimages/thumnailPortfolio6.jpeg', alt: 'thumnail' },
  { src: 'assets/portfolioimages/thumnailPortfolio7.jpeg', alt: 'thumnail' },
  { src: 'assets/portfolioimages/thumnailPortfolio8.jpeg', alt: 'thumnail' },
  { src: 'assets/portfolioimages/thumnailPortfolio9.jpeg', alt: 'thumnail' },
]

posterImages=[
  { src: 'assets/img/comingsoon.webp', alt: 'poster' },
]  


// intro
introVideos=[
  { src: 'assets/portfoliovideos/introPortfolio1.mp4', alt: 'intro', type: 'video/mp4' },
  { src: 'assets/portfoliovideos/introPortfolio2.mp4', alt: 'intro', type: 'video/mp4' },
  { src: 'assets/portfoliovideos/introPortfolio3.mp4', alt: 'intro', type: 'video/mp4' },

]

// screen
screenVideos=[
  // { src: 'assets/portfoliovideos/screenPortfolio6.mp4', alt: 'screen', type: 'video/mp4' },
  
  { src: 'assets/portfoliovideos/screenPortfolio1.mp4', alt: 'screen', type: 'video/mp4' },
  { src: 'assets/portfoliovideos/screenPortfolio2.mp4', alt: 'screen', type: 'video/mp4' },
  { src: 'assets/portfoliovideos/screenPortfolio3.mp4', alt: 'screen', type: 'video/mp4' },
  { src: 'assets/portfoliovideos/screenPortfolio4.mp4', alt: 'screen', type: 'video/mp4' },
  { src: 'assets/portfoliovideos/screenPortfolio5.mp4', alt: 'screen', type: 'video/mp4' },
  { src: 'assets/portfoliovideos/screenPortfolio6.mp4', alt: 'screen', type: 'video/mp4' },
]

// video edits
videoVideos=[
  { src: 'assets/portfoliovideos/videoEditPortfolio1.mp4', alt: 'screen', type: 'video/mp4' },
  { src: 'assets/portfoliovideos/videoEditPortfolio2.mp4', alt: 'screen', type: 'video/mp4' },
  { src: 'assets/portfoliovideos/videoEditPortfolio3.mp4', alt: 'screen', type: 'video/mp4' },
  { src: 'assets/portfoliovideos/videoEditPortfolio4.mp4', alt: 'screen', type: 'video/mp4' },
  { src: 'assets/portfoliovideos/videoEditPortfolio5.mp4', alt: 'screen', type: 'video/mp4' },
  { src: 'assets/portfoliovideos/videoEditPortfolio6.mp4', alt: 'screen', type: 'video/mp4' },
  { src: 'assets/portfoliovideos/videoEditPortfolio7.mp4', alt: 'screen', type: 'video/mp4' },
  { src: 'assets/portfoliovideos/videoEditPortfolio8.mp4', alt: 'screen', type: 'video/mp4' },
  { src: 'assets/portfoliovideos/videoEditPortfolio9.mp4', alt: 'screen', type: 'video/mp4' },
  { src: 'assets/portfoliovideos/videoEditPortfolio10.mp4', alt: 'screen', type: 'video/mp4' },
  { src: 'assets/portfoliovideos/videoEditPortfolio11.mp4', alt: 'screen', type: 'video/mp4' },
  { src: 'assets/portfoliovideos/videoEditPortfolio12.mp4', alt: 'screen', type: 'video/mp4' },
]


currentMediaIndex: number | null = null;
currentMediaType: 'image' | 'video' | null = null;





selectPortfolioTab(tab: string) {
    this.currentPortfolioTab = tab;
}



}
