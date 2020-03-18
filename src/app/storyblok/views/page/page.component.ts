import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { StoryblokComponentAbstract } from 'app/storyblok/storyblok-component.abstract';
import { components } from 'app/storyblok/storyblok-component-index';

@Component({
  selector: 'lt-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PageComponent extends StoryblokComponentAbstract implements OnInit {

  public components = components;

  @Input() public body: any[];

  constructor() {
    super();
  }

  /**
   * Initialize
   */
  public ngOnInit(): void {
  }

}
