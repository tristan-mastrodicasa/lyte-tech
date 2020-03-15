import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lt-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FeatureComponent implements OnInit {

  @Input() public name: string;
  @Input() public _editable: string;

  constructor() { }

  /**
   * Initialize
   */
  public ngOnInit(): void {
  }

}
