import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { main } from 'assets/cohost/js/main';

@Component({
  selector: 'lt-trophy-image',
  templateUrl: './trophy-image.component.html',
  styleUrls: ['./trophy-image.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TrophyImageComponent implements OnInit {

  @Input() public _editable: any;
  @Input() public title: string;
  @Input() public description: string;
  @Input() public imageUrl: string;
  @Input() public imagePosition: 'left' | 'right';

  constructor() { }

  /**
   * Initialize
   */
  public ngOnInit(): void {
    main();
  }

}
