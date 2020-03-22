import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { StoryblokComponentAbstract } from 'app/storyblok/storyblok-component.abstract';
import { main } from 'assets/cohost/js/main';

@Component({
  selector: 'lt-focus-points',
  templateUrl: './focus-points.component.html',
  styleUrls: ['./focus-points.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FocusPointsComponent extends StoryblokComponentAbstract implements OnInit {

  constructor() {
    super();
  }

  /**
   * Initialize js from cohost
   */
  public ngOnInit(): void {
    main();
  }

}
