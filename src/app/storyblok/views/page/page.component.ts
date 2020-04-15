import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lt-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PageComponent implements OnInit {

  @Input() public body: any[];

  constructor() { }

  /**
   * Initialize
   */
  public ngOnInit(): void {
  }

}
