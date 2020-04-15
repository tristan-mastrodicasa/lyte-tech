import { Input, Component, OnInit, ViewEncapsulation } from '@angular/core';

import { StoryblokMetadata } from 'app/storyblok/storyblok-metadata.class';
import { mappedComponents } from 'app/storyblok/components';

@Component({
  selector: 'lt-blok',
  templateUrl: './blok.component.html',
  styleUrls: ['./blok.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BlokComponent extends StoryblokMetadata implements OnInit {

  @Input() public blok: any;
  public components = mappedComponents;

  constructor() {
    super();
  }

  /**
   * Add editable info to the _editable property
   */
  public ngOnInit(): void {
    this._editable = this.blok._editable;
  }

}
