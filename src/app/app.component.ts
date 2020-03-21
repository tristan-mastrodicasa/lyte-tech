import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { trigger, transition, style, query, animate, state } from '@angular/animations';

import { main } from 'assets/cohost/js/main';

@Component({
  selector: 'lt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routerAnimations', [
      state('start', style({ opacity: 0.3 })),
      state('end', style({ opacity: 1 })),
      transition('end => start', [
        query(':self', [
          animate('200ms ease-out', style({ opacity: 0.3 })),
        ]),
      ]),
      transition('start => end', [
        query(':self', [
          animate('200ms', style({ opacity: 1 })),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {

  public routerState: 'start' | 'end' = 'end';

  constructor(public router: Router) {

    /**
     * For every route change re-initialize the main JS file
     * that initializes cohost javascript + change the animation state
     */
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) this.routerState = 'start';
      if (event instanceof NavigationEnd) {
        this.routerState = 'end';
        main();
      }
    });

  }

}
