import { TextSectionComponent } from './text-section.component';
import { StoryblokService } from 'app/storyblok/storyblok.service';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Text Section',
  decorators: [
    moduleMetadata({
      declarations: [
        TextSectionComponent,
      ],
      providers: [
        StoryblokService,
      ],
    }),
  ],
};

/**
 * The content provided in the body is an example taken from storyblok
 */
export const standard = () => ({
  component: TextSectionComponent,
  props: {
    width: 'wide',
    body: {
      content: [
        { type: 'heading', attrs: { level: 2 }, content: [{ text: 'Hello world, I am a title', type: 'text' }] },
        { type: 'paragraph', content: [{ text: 'This is some random text', type: 'text' }] },
      ],
    },
  },
});
