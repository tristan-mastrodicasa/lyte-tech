import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lt-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ServicesListComponent implements OnInit {

  constructor() { }

  /**
   * Initialize
   */
  public ngOnInit(): void { }

}
