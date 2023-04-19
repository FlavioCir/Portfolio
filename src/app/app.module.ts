import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { ContactComponent } from './components/contact/contact.component';
import { DownloadComponent } from './components/download/download.component';
import { SocialComponent } from './components/social/social.component';
import { ProjectComponent } from './components/project/project.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeScreenComponent,
    ContactComponent,
    DownloadComponent,
    SocialComponent,
    ProjectComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
