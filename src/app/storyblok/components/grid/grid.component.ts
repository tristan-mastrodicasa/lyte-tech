import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { components } from 'app/storyblok/storyblok-component-index';

@Component({
  selector: 'lt-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GridComponent implements OnInit {

  public components = components;

  @Input() public columns: any[];
  @Input() public _editable: any;

  constructor() { }

  /**
   * Initialize
   */
  public ngOnInit(): void {
  }

}
