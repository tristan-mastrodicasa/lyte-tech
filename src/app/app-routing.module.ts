import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { ServicesComponent } from './views/services/services.component';
import { TermsComponent } from './views/terms/terms.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'terms', component: TermsComponent },
  { path: '**', loadChildren: () => import('./storyblok/storyblok.module').then(m => m.StoryblokModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
