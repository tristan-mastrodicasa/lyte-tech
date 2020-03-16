import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DynamicModule } from 'ng-dynamic-component';
import { StoryblokDirective } from './storyblok.directive';
import { StoryblokService } from './storyblok.service';
import { StoryblokResolverService } from './storyblok-resolver.service';
import { StoryblokComponent } from './storyblok.component';
import { PageComponent } from './views/page/page.component';
import { CounterSectionComponent } from './components/counter-section/counter-section.component';

const routes: Routes = [
  { path: '**', component: StoryblokComponent, resolve: { storyblok: StoryblokResolverService } },
];

@NgModule({
  declarations: [
    StoryblokDirective,
    StoryblokComponent,
    PageComponent,
    CounterSectionComponent,
  ],
  imports: [
    CommonModule,
    DynamicModule.withComponents([
      PageComponent,
      CounterSectionComponent,
    ]),
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
    StoryblokDirective,
  ],
  providers: [
    StoryblokService,
    StoryblokResolverService,
  ],
})
export class StoryblokModule { }
