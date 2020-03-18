import { Input, HostBinding } from '@angular/core';

export abstract class StoryblokComponentAbstract {
  @Input() public _editable: any;

  @HostBinding('style') get style() { return 'display: block;'; } // Allows storyblok to highlight the element
  @HostBinding('attr.data-blok-c') get dbc() { return JSON.stringify(this.getOptions()); }
  @HostBinding('attr.data-blok-uid') get dbuid() { return `${this.getOptions().id}-${this.getOptions().uid}`; }

  /**
   * Execute directive
   */
  public getOptions() {
    if (typeof this._editable === 'undefined') {
      return;
    }

    return JSON.parse(this._editable.replace('<!--#storyblok#', '').replace('-->', ''));
  }
}
