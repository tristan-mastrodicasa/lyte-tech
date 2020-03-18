import { Component, Input, AfterViewInit, ViewEncapsulation } from '@angular/core';

import { StoryblokComponentAbstract } from 'app/storyblok/storyblok-component.abstract';
import { main } from 'assets/cohost/js/main';

@Component({
  selector: 'lt-counter-section',
  templateUrl: './counter-section.component.html',
  styleUrls: ['./counter-section.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CounterSectionComponent extends StoryblokComponentAbstract implements AfterViewInit {

  @Input() public _editable: any;
  @Input() public title: string;
  @Input() public counters: {
    initialQuantity: number;
    endQuantity: number;
    unit: string;
    unitPosition: 'before' | 'after';
    description: string;
  }[];

  constructor() {
    super();
  }

  /**
   * Initialize
   */
  public ngAfterViewInit(): void {
    main();
  }

}
