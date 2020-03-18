import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DynamicModule } from 'ng-dynamic-component';
import { StoryblokService } from './storyblok.service';
import { StoryblokResolverService } from './storyblok-resolver.service';
import { StoryblokComponent } from './storyblok.component';
import { PageComponent } from './views/page/page.component';
import { CounterSectionComponent } from './components/counter-section/counter-section.component';
import { HeroImageHeaderComponent } from './components/hero-image-header/hero-image-header.component';
import { TrophyImageComponent } from './components/trophy-image/trophy-image.component';

const routes: Routes = [
  { path: '**', component: StoryblokComponent, resolve: { storyblok: StoryblokResolverService } },
];

@NgModule({
  declarations: [
    StoryblokComponent,
    PageComponent,
    CounterSectionComponent,
    HeroImageHeaderComponent,
    TrophyImageComponent,
  ],
  imports: [
    CommonModule,
    DynamicModule.withComponents([
      PageComponent,
      CounterSectionComponent,
      HeroImageHeaderComponent,
      TrophyImageComponent,
    ]),
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    StoryblokService,
    StoryblokResolverService,
  ],
})
export class StoryblokModule { }
