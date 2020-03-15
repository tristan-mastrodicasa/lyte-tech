import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[ltStoryblok]',
})
export class StoryblokDirective implements OnInit {

  /** @todo check on why tslint failed here */
  @Input('ltStoryblok') public ltStoryblok: string; // tslint:disable-line

  constructor(private el: ElementRef) { }

  /**
   * Initialize story blok directive
   */
  public ngOnInit() {
    if (typeof this.ltStoryblok === 'undefined') {
      return;
    }

    const options = JSON.parse(this.ltStoryblok.replace('<!--#storyblok#', '').replace('-->', ''));

    this.el.nativeElement.setAttribute('data-blok-c', JSON.stringify(options));
    this.el.nativeElement.setAttribute('data-blok-uid', `${options.id}-${options.uid}`);
  }

}
