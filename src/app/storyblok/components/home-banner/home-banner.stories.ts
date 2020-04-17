import { HomeBannerComponent } from './home-banner.component';
import { moduleMetadata } from '@storybook/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

export default {
  title: 'Home Banner',
  decorators: [
    moduleMetadata({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
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
