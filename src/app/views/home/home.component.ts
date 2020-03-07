import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {

  constructor() { }

  /**
   * Initialize
   */
  public ngOnInit(): void {

  }

}
