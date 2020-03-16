import { Component, Input, AfterViewInit, ViewEncapsulation } from '@angular/core';

import { main } from 'assets/cohost/js/main.js';

@Component({
  selector: 'lt-counter-section',
  templateUrl: './counter-section.component.html',
  styleUrls: ['./counter-section.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CounterSectionComponent implements AfterViewInit {

  @Input() public title: string;
  @Input() public counters: {
    initialQuantity: number;
    endQuantity: number;
    unit: string;
    unitPosition: 'before' | 'after';
    description: string;
  }[];
  @Input() public _editable: string;

  constructor() { }

  /**
   * Initialize
   */
  public ngAfterViewInit(): void {
    main();
  }

}
