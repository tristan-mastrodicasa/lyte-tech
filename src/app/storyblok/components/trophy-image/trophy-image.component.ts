import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { StoryblokComponentAbstract } from 'app/storyblok/storyblok-component.abstract';
import { main } from 'assets/cohost/js/main';

@Component({
  selector: 'lt-trophy-image',
  templateUrl: './trophy-image.component.html',
  styleUrls: ['./trophy-image.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TrophyImageComponent extends StoryblokComponentAbstract implements OnInit {

  @Input() public _editable: any;
  @Input() public title: string;
  @Input() public description: string;
  @Input() public imageUrl: string;
  @Input() public imagePosition: 'left' | 'right';

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
