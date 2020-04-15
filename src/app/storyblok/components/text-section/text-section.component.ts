import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { StoryblokService } from 'app/storyblok/storyblok.service';
import { main } from 'assets/cohost/js/main';

@Component({
  selector: 'lt-text-section',
  templateUrl: './text-section.component.html',
  styleUrls: ['./text-section.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TextSectionComponent implements OnInit {

  @Input() public width: string;
  @Input() public body: any;
  public renderedBody: string;

  constructor(private storyblokService: StoryblokService) { }

  /**
   * Initialize the compoent
   */
  public ngOnInit(): void {
    this.renderedBody = this.storyblokService.richTextResolver.render(this.body);
    main();
  }

}
