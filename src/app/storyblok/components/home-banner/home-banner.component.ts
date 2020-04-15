import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { main } from 'assets/cohost/js/main';

@Component({
  selector: 'lt-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeBannerComponent implements OnInit {

  @Input() public assetUrl: string;

  constructor() { }

  /**
   * Initialize cohost javascript
   */
  public ngOnInit(): void {
    main();
  }

}
