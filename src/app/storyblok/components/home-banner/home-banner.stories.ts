import { HomeBannerComponent } from './home-banner.component';

export default {
  title: 'Home Banner',
};

export const standard = () => ({
  component: HomeBannerComponent,
  props: {
    assetUrl: 'assets/img/graphics/add-to-home-screen-video.mp4',
  },
});
