import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { StoryblokComponentAbstract } from 'app/storyblok/storyblok-component.abstract';
import { mappedComponents } from 'app/storyblok/components';

@Component({
  selector: 'lt-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PageComponent extends StoryblokComponentAbstract implements OnInit {

  public components = mappedComponents;

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
