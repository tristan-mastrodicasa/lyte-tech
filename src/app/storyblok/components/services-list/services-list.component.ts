import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { main } from 'assets/cohost/js/main';

@Component({
  selector: 'lt-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ServicesListComponent implements OnInit {

  constructor() { }

  /**
   * Initialize cohost javascript
   */
  public ngOnInit(): void {
    main();
  }

}
