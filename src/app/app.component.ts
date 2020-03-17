import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { main } from 'assets/cohost/js/main';

@Component({
  selector: 'lt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(public router: Router) {
    // For every route change re-initialize the main JS file that initializes cohost javascript //
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        main();
      }
    });
  }

  /**
   * Initialize
   */
  public ngOnInit() { }

}
