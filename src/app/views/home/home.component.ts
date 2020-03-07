import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';

declare var $: any;

@Component({
  selector: 'lt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }

  /**
   * Initialize
   */
  public ngOnInit(): void {
  }

  /**
   * Initialize cohost
   */
  public ngAfterViewInit() {
    $.getScript('/assets/cohost/js/main.js');
  }

}
