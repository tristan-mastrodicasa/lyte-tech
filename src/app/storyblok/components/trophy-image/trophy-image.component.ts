import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { StoryblokService } from 'app/storyblok/storyblok.service';

@Component({
  selector: 'lt-trophy-image',
  templateUrl: './trophy-image.component.html',
  styleUrls: ['./trophy-image.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TrophyImageComponent implements OnInit {

  @Input() public description: any;
  @Input() public imageUrl: string;
  @Input() public imagePosition: 'left' | 'right';
  public renderedDescription: string;

  constructor(private storyblokService: StoryblokService) { }

  /**
   * Initialize
   */
  public ngOnInit(): void {
    this.renderedDescription = this.storyblokService.richTextResolver.render(this.description);
  }

}
