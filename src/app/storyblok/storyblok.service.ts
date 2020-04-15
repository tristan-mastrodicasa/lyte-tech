import { Injectable } from '@angular/core';
import storyblokJsClient from 'storyblok-js-client';

@Injectable()
export class StoryblokService {

  private sbClient = new storyblokJsClient({
    accessToken: 'P1BI3QRkPDQWwKHVA9iGQQtt',
    cache: { type: 'memory', clear: 'auto' },
  });

  // Expose the rich text resolver functionality //
  public richTextResolver = this.sbClient.richTextResolver;

  constructor() { }

  /**
   * Get a story (page)
   */
  public async getStory(slug: string, params?: object): Promise<any> {
    return this.sbClient.getStory(slug, params)
      .then(res => res.data);
  }

  /**
   * Get multiple stories (blocks for a page)
   */
  public async getStories(params?: object): Promise<any> {
    return this.sbClient.getStories(params)
      .then(res => res.data);
  }

}
