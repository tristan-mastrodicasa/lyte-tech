import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lt-teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TeaserComponent implements OnInit {

  @Input() public headline: string;
  @Input() public _editable: any;

  constructor() { }

  /**
   * Initialize
   */
  public ngOnInit(): void {
  }

}
