import { HeroImageHeaderComponent } from './hero-image-header.component';
import { StoryblokDirective } from 'app/storyblok/storyblok.directive';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Hero Image Header',
  decorators: [
    moduleMetadata({
      declarations: [
        HeroImageHeaderComponent,
        StoryblokDirective,
      ],
    }),
  ],
};

export const standard = () => ({
  component: HeroImageHeaderComponent,
  props: {
    title: 'Page Title',
    imageUrl: 'assets/img/graphics/material-design-wallpaper-10.png',
  },
});

export const externalImage = () => ({
  component: HeroImageHeaderComponent,
  props: {
    title: 'Page Title',
    imageUrl: 'https://images2.alphacoders.com/647/647694.jpg',
  },
});

export const noTitle = () => ({
  component: HeroImageHeaderComponent,
  props: {
    title: '',
    imageUrl: 'assets/img/graphics/material-design-wallpaper-10.png',
  },
});
