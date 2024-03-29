import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lt-storyblok',
  templateUrl: './storyblok.component.html',
  styleUrls: ['./storyblok.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StoryblokComponent implements OnInit {

  public story = { content: null, name: '' };

  constructor(private route: ActivatedRoute) {

    window.storyblok.init();
    window.storyblok.on(['change', 'published'], () => {
      location.reload(true);
    });

  }

  /**
   * Find initialize component
   */
  public ngOnInit() {
    this.route.data.subscribe((data) => {
      this.story = data.storyblok.story;
    });
  }

}
