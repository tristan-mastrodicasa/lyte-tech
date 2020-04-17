import { ServicesListComponent } from './services-list.component';
import { moduleMetadata } from '@storybook/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

export default {
  title: 'Services List',
  decorators: [
    moduleMetadata({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
    }),
  ],
};

export const standard = () => ({
  component: ServicesListComponent,
  props: {},
});
