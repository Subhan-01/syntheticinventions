import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WorkWithUsComponent } from './work-with-us/work-with-us.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { AppDevelopmentComponent } from './app-development/app-development.component';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { GraphicDesigningComponent } from './graphic-designing/graphic-designing.component';
import { VideoEditingComponent } from './video-editing/video-editing.component';
import { SeoOptimizationComponent } from './seo-optimization/seo-optimization.component';
import { SocialMediaHandlesComponent } from './social-media-handles/social-media-handles.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { FaqsComponent } from './faqs/faqs.component';
import { TermandconditionComponent } from './termandcondition/termandcondition.component';
import { PaymentpolicyComponent } from './paymentpolicy/paymentpolicy.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';

const routes: Routes = [
  { path: '',  component: HomeComponent  },
  { path: 'about', component: AboutComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'contactUs', component: ContactUsComponent},
  { path: 'workWithUs', component: WorkWithUsComponent},

  // services pages
  { path: 'webDevelopmentService', component: WebDevelopmentComponent},
  { path: 'appDevelopmentService', component:AppDevelopmentComponent},
  { path: 'digitalMarketingService', component: DigitalMarketingComponent},
  { path: 'graphicDesigningService', component: GraphicDesigningComponent},
  { path: 'videoEditingService', component: VideoEditingComponent},
  { path: 'seoOptimizationService', component: SeoOptimizationComponent},
  { path: 'socialMediaService', component: SocialMediaHandlesComponent},
  { path: 'youtubeService', component:YoutubeComponent},

  // footer pages
  { path: 'faqs', component: FaqsComponent},
  { path: 'term&conditions', component:TermandconditionComponent},
  { path: 'paymentPolicy', component:PaymentpolicyComponent},
  { path: 'privacypolicy', component:PrivacypolicyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
