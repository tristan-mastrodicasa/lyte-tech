import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DynamicModule } from 'ng-dynamic-component';
import { StoryblokDirective } from './storyblok.directive';
import { StoryblokService } from './storyblok.service';
import { StoryblokResolverService } from './storyblok-resolver.service';
import { StoryblokComponent } from './storyblok.component';
import { PageComponent } from './views/page/page.component';
import { TeaserComponent } from './components/teaser/teaser.component';
import { GridComponent } from './components/grid/grid.component';
import { FeatureComponent } from './components/feature/feature.component';

const routes: Routes = [
  { path: '**', component: StoryblokComponent, resolve: { storyblok: StoryblokResolverService } },
];

@NgModule({
  declarations: [
    StoryblokDirective,
    StoryblokComponent,
    PageComponent,
    TeaserComponent,
    GridComponent,
    FeatureComponent,
  ],
  imports: [
    CommonModule,
    DynamicModule.withComponents([
      PageComponent,
      TeaserComponent,
      GridComponent,
      FeatureComponent,
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
