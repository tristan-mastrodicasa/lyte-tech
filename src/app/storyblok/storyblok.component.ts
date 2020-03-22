import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mappedViews } from './views';

import { first } from 'rxjs/operators';

@Component({
  selector: 'lt-storyblok',
  templateUrl: './storyblok.component.html',
  styleUrls: ['./storyblok.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StoryblokComponent implements OnInit {

  public story = { content: null, name: '' };
  public components = mappedViews;

  constructor(private route: ActivatedRoute) {

    window.storyblok.init();
    window.storyblok.on(['change', 'published'], () => {
      location.reload(true);
    });

  }

  /**
   * Find initialize component
   */
  public ngOnInit() {
    this.route.data.pipe(first()).subscribe((data) => {
      this.story = data.storyblok.story;
    });
  }

}
