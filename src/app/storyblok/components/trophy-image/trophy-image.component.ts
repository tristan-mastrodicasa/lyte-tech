import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { StoryblokService } from 'app/storyblok/storyblok.service';
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
  @Input() public description: any;
  @Input() public imageUrl: string;
  @Input() public imagePosition: 'left' | 'right';
  public renderedDescription: string;

  constructor(private storyblokService: StoryblokService) {
    super();
  }

  /**
   * Initialize
   */
  public ngOnInit(): void {
    this.renderedDescription = this.storyblokService.richTextResolver.render(this.description);
    main();
  }

}
