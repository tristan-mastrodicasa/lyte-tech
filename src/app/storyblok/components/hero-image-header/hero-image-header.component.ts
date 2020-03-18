import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { StoryblokComponentAbstract } from 'app/storyblok/storyblok-component.abstract';
import { main } from 'assets/cohost/js/main';

@Component({
  selector: 'lt-hero-image-header',
  templateUrl: './hero-image-header.component.html',
  styleUrls: ['./hero-image-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeroImageHeaderComponent extends StoryblokComponentAbstract implements OnInit {

  @Input() public _editable: any;
  @Input() public title: string;
  @Input() public imageUrl: string;

  constructor() {
    super();
  }

  /**
   * Initialize
   */
  public ngOnInit(): void {
    main();
  }

}
