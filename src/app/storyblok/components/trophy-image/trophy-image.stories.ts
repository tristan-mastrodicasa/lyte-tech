import { TrophyImageComponent } from './trophy-image.component';
import { StoryblokDirective } from 'app/storyblok/storyblok.directive';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Trophy Image',
  decorators: [
    moduleMetadata({
      declarations: [
        TrophyImageComponent,
        StoryblokDirective,
      ],
    }),
  ],
};

export const standard = () => ({
  component: TrophyImageComponent,
  props: {
    title: 'Game Watch',
    description: `
    <p>Game Watch is an event organizing app for multiplayer games. It is meant to fill the demand for esports teams who want to organize competitions and record their results. It is easily linkable with discord.</p>
    <p>The events on Game Watch are linkable through URL's and can be accessed from desktop browsers where most "gamers" reside. Mobile users have the option to download the app and receive notifications when an event is about to happen.</p>
    `,
    imageUrl: 'assets/img/graphics/gw.jpg',
    imagePosition: 'left',
  },
});

export const noTitleOrImage = () => ({
  component: TrophyImageComponent,
  props: {
    description: `
    <p>Game Watch is an event organizing app for multiplayer games. It is meant to fill the demand for esports teams who want to organize competitions and record their results. It is easily linkable with discord.</p>
    <p>The events on Game Watch are linkable through URL's and can be accessed from desktop browsers where most "gamers" reside. Mobile users have the option to download the app and receive notifications when an event is about to happen.</p>
    `,
    imagePosition: 'left',
  },
});

export const imageOnRight = () => ({
  component: TrophyImageComponent,
  props: {
    title: 'Game Watch',
    description: `
    <p>Game Watch is an event organizing app for multiplayer games. It is meant to fill the demand for esports teams who want to organize competitions and record their results. It is easily linkable with discord.</p>
    <p>The events on Game Watch are linkable through URL's and can be accessed from desktop browsers where most "gamers" reside. Mobile users have the option to download the app and receive notifications when an event is about to happen.</p>
    `,
    imageUrl: 'assets/img/graphics/gw.jpg',
    imagePosition: 'right',
  },
});
