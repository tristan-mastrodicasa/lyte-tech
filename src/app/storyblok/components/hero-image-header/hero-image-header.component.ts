import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { main } from 'assets/cohost/js/main.js';

@Component({
  selector: 'lt-hero-image-header',
  templateUrl: './hero-image-header.component.html',
  styleUrls: ['./hero-image-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeroImageHeaderComponent implements OnInit {

  @Input() public _editable: any;
  @Input() public title: string;
  @Input() public imageUrl: string;

  constructor() { }

  /**
   * Initialize
   */
  public ngOnInit(): void {
    main();
  }

}