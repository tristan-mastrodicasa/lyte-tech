import { FocusPointsComponent } from './focus-points.component';
import { moduleMetadata } from '@storybook/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

export default {
  title: 'Focus Points',
  decorators: [
    moduleMetadata({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
    }),
  ],
};

export const standard = () => ({
  component: FocusPointsComponent,
  props: {},
});
