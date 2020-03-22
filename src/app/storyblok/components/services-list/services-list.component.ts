import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { StoryblokComponentAbstract } from 'app/storyblok/storyblok-component.abstract';
import { main } from 'assets/cohost/js/main';

@Component({
  selector: 'lt-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ServicesListComponent extends StoryblokComponentAbstract implements OnInit {

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
