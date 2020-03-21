import { HeroImageHeaderComponent } from './hero-image-header.component';

export default {
  title: 'Hero Image Header',
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
