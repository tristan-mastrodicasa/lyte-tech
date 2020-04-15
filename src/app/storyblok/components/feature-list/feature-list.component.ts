import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { main } from 'assets/cohost/js/main';

@Component({
  selector: 'lt-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FeatureListComponent implements OnInit {

  constructor() { }

  /**
   * Initialize cohost js
   */
  public ngOnInit(): void {
    main();
  }

}
