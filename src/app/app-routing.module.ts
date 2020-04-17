import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { StoryblokComponent } from './storyblok/storyblok.component';
import { StoryblokResolverService } from './storyblok/storyblok-resolver.service';

const routes: Routes = [
  { path: '**', component: StoryblokComponent, resolve: { storyblok: StoryblokResolverService } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
