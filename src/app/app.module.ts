import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

// main pages
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WorkWithUsComponent } from './work-with-us/work-with-us.component';

// services pages
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { AppDevelopmentComponent } from './app-development/app-development.component';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { GraphicDesigningComponent } from './graphic-designing/graphic-designing.component';
import { VideoEditingComponent } from './video-editing/video-editing.component';
import { SeoOptimizationComponent } from './seo-optimization/seo-optimization.component';
import { SocialMediaHandlesComponent } from './social-media-handles/social-media-handles.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { FaqsComponent } from './faqs/faqs.component';
import { TermandconditionComponent } from './termandcondition/termandcondition.component';
import { PaymentpolicyComponent } from './paymentpolicy/paymentpolicy.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { LoaderComponent } from './loader/loader.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactUsComponent,
    WorkWithUsComponent,
    WebDevelopmentComponent,
    AppDevelopmentComponent,
    DigitalMarketingComponent,
    GraphicDesigningComponent,
    VideoEditingComponent,
    SeoOptimizationComponent,
    SocialMediaHandlesComponent,
    YoutubeComponent,
    FaqsComponent,
    TermandconditionComponent,
    PaymentpolicyComponent,
    PrivacypolicyComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatChipsModule,
    ReactiveFormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
