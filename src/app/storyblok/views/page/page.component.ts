import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { components } from 'app/storyblok/storyblok-component-index';

@Component({
  selector: 'lt-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PageComponent implements OnInit {

  public components = components;

  @Input() public body: any[];
  @Input() public _editable: any;

  constructor() { }

  /**
   * Initialize
   */
  public ngOnInit(): void {
  }

}
