import { TrophyImageComponent } from './trophy-image.component';
import { StoryblokService } from 'app/storyblok/storyblok.service';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Trophy Image',
  decorators: [
    moduleMetadata({
      declarations: [
        TrophyImageComponent,
      ],
      providers: [
        StoryblokService,
      ],
    }),
  ],
};

/**
 * The content provided in the description is an example taken from storyblok
 */
const storyblokDescription = {
  content: [
    { type: 'heading', attrs: { level: 2 }, content: [{ text: 'Hello world, I am a title', type: 'text' }] },
    { type: 'paragraph', content: [{ text: 'Game Watch is an event organizing app for multiplayer games. It is meant to fill the demand for esports teams...', type: 'text' }] },
    { type: 'paragraph', content: [{ text: 'The events on Game Watch are linkable through URL\'s and can be accessed from desktop browsers where most \"gamers\"...', type: 'text' }] },
  ],
};

export const standard = () => ({
  component: TrophyImageComponent,
  props: {
    description: storyblokDescription,
    imageUrl: 'assets/img/graphics/gw.jpg',
    imagePosition: 'left',
  },
});

export const noTitleOrImage = () => ({
  component: TrophyImageComponent,
  props: {
    description: storyblokDescription,
    imagePosition: 'left',
  },
});

export const imageOnRight = () => ({
  component: TrophyImageComponent,
  props: {
    description: storyblokDescription,
    imageUrl: 'assets/img/graphics/gw.jpg',
    imagePosition: 'right',
  },
});
