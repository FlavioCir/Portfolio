import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { ContactComponent } from './components/contact/contact.component';
import { DownloadComponent } from './components/download/download.component';
import { SocialComponent } from './components/social/social.component';
import { ProjectComponent } from './components/project/project.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "home_screen",
        component: HomeScreenComponent
    },
    {
        path: "contact",
        component: ContactComponent
    },
    {
        path: "download",
        component: DownloadComponent
    },
    {
        path: "social",
        component: SocialComponent
    },
    {
        path: "project",
        component: ProjectComponent
    },
    {
        path: "about_me",
        component: AboutMeComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
