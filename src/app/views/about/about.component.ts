import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lt-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutComponent implements OnInit {

  constructor() { }

  /**
   * Initialize
   */
  public ngOnInit(): void {
  }

}
