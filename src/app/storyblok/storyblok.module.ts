import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DynamicModule } from 'ng-dynamic-component';
import { StoryblokService } from './storyblok.service';
import { StoryblokResolverService } from './storyblok-resolver.service';
import { StoryblokComponent } from './storyblok.component';
import { BlokComponent } from './components/blok/blok.component';
import { StoryComponent } from './views/story/story.component';

import { components } from './components';
import { views } from './views';

@NgModule({
  declarations: [
    StoryblokComponent,
    BlokComponent,
    StoryComponent,
    ...components,
    ...views,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DynamicModule.forRoot(),
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers: [
    StoryblokService,
    StoryblokResolverService,
  ],
})
export class StoryblokModule { }
