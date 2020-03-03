import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { IContrastPoints } from './contrast-points.interface';

@Component({
  selector: 'lt-contrast-points',
  templateUrl: './contrast-points.component.html',
  styleUrls: ['./contrast-points.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContrastPointsComponent implements OnInit {

  @Input() public contrastPoints: IContrastPoints;

  constructor() { }

  /**
   * Initialize
   */
  public ngOnInit() {

  }

}
