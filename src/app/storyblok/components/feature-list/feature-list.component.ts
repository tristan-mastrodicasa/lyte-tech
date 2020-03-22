import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { StoryblokComponentAbstract } from 'app/storyblok/storyblok-component.abstract';
import { main } from 'assets/cohost/js/main';

@Component({
  selector: 'lt-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FeatureListComponent extends StoryblokComponentAbstract implements OnInit {

  constructor() {
    super();
  }

  /**
   * Initialize cohost js
   */
  public ngOnInit(): void {
    main();
  }

}
