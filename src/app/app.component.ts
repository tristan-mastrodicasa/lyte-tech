import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'lt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  public title = 'lyte-tech';

  /**
   * Initialize
   */
  public ngOnInit() {
  }

  /**
   * Initialize cohost
   */
  public ngAfterViewInit() {
    $.getScript('/assets/cohost/js/main.js');
  }
}
