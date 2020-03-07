import { Component, OnInit } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';

declare var $: any;

@Component({
  selector: 'lt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(public router: Router) {

    // For every route change reload the main JS file that initializes cohost javascript //
    this.router.events.subscribe((event) => {

      if (event instanceof NavigationEnd) {
        $.getScript('/assets/cohost/js/main.js');
      }

    });

  }

  /**
   * Initialize
   */
  public ngOnInit() {

  }

}
