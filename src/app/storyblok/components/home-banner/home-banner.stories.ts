import { HomeBannerComponent } from './home-banner.component';
import { moduleMetadata } from '@storybook/angular';
import { NO_ERRORS_SCHEMA } from '@angular/core';

export default {
  title: 'Home Banner',
  decorators: [
    moduleMetadata({
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
    }),
  ],
};

export const standard = () => ({
  component: HomeBannerComponent,
  props: {
    assetUrl: 'assets/img/graphics/add-to-home-screen-video.mp4',
  },
});
