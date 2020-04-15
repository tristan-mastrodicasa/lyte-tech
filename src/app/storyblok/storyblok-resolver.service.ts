import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { StoryblokService } from './storyblok.service';

@Injectable()
export class StoryblokResolverService implements Resolve<any> {

  constructor(private storyblokService: StoryblokService) { }

  /**
   * Get data from story block
   */
  public async resolve(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let version = 'published';
    const storyblok: any = window.storyblok;

    if (storyblok.inIframe()) version = 'draft';

    let data: any;

    try {
      data = await this.storyblokService.getStory(state.url.substring(1) || 'index', { version });
    } catch (e) {
      data = await this.storyblokService.getStory('not-found', { version });
    }

    return data;
  }
}
