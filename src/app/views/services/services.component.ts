import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lt-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ServicesComponent implements OnInit {

  constructor() { }

  /**
   * Initialize
   */
  public ngOnInit(): void {
  }

}
