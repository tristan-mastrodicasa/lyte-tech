import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';

declare var $: any;

@Component({
  selector: 'lt-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactUsComponent implements OnInit, AfterViewInit {

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
