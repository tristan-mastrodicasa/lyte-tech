import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { StoryblokComponentAbstract } from 'app/storyblok/storyblok-component.abstract';
import { main } from 'assets/cohost/js/main';

@Component({
  selector: 'lt-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeBannerComponent extends StoryblokComponentAbstract implements OnInit {

  @Input() public assetUrl: string;

  constructor() {
    super();
  }

  /**
   * Initialize cohost javascript
   */
  public ngOnInit(): void {
    main();
  }

}
