import { HomeBannerComponent } from './home-banner.component';

export default {
  title: 'Home Banner',
};

export const standard = () => ({
  component: HomeBannerComponent,
  props: {
    imageUrl: 'assets/img/graphics/add-to-home-screen.gif',
  },
});
