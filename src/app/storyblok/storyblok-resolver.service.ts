import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { StoryblokService } from './storyblok.service';

@Injectable()
export class StoryblokResolverService implements Resolve<any> {

  constructor(private storyblokService: StoryblokService) { }

  /**
   * Get data from story block
   */
  public async resolve(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    return this.storyblokService.getStory(state.url.substring(1), { version: 'draft' });
        // .then(data => this.story = data.story);
  }
}
