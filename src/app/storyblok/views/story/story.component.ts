import { Input, Component, OnInit, ViewEncapsulation } from '@angular/core';

import { StoryblokMetadata } from 'app/storyblok/storyblok-metadata.class';
import { mappedViews } from 'app/storyblok/views';

@Component({
  selector: 'lt-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StoryComponent extends StoryblokMetadata implements OnInit {

  @Input() public story: any;
  public views = mappedViews;

  constructor() {
    super();
  }

  /**
   * Add editable info to the _editable property
   */
  public ngOnInit(): void {
    this._editable = this.story._editable;
  }
}
