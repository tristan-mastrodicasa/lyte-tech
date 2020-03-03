import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IContrastPoints } from './shared/components/contrast-points/contrast-points.interface';

declare var $: any;

@Component({
  selector: 'lt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  public title = 'lyte-tech';
  public highConversion: IContrastPoints;

  /**
   * Initialize
   */
  public ngOnInit() {
    this.highConversion = {
      title: 'Higher Conversion rates',
      description: 'The speed of pwa\'s allows you to increase conversions of mobile visitors!',
    };
  }

  /**
   * Initialize cohost
   */
  public ngAfterViewInit() {
    $.getScript('/assets/cohost/js/main.js');
  }
}
