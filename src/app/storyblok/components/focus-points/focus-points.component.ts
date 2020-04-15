import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { main } from 'assets/cohost/js/main';

@Component({
  selector: 'lt-focus-points',
  templateUrl: './focus-points.component.html',
  styleUrls: ['./focus-points.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FocusPointsComponent implements OnInit {

  constructor() { }

  /**
   * Initialize js from cohost
   */
  public ngOnInit(): void {
    main();
  }

}
