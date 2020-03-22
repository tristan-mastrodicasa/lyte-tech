import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { StoryblokService } from './storyblok.service';
import { environment } from 'environments/environment';

@Injectable()
export class StoryblokResolverService implements Resolve<any> {

  constructor(private storyblokService: StoryblokService) { }

  /**
   * Get data from story block
   */
  public async resolve(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    return this.storyblokService.getStory(state.url.substring(1) || 'index', { version: (environment.production ? 'published' : 'draft') });
  }
}
