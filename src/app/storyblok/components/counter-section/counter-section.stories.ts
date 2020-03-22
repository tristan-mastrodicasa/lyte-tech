import { CounterSectionComponent } from './counter-section.component';

export default {
  title: 'Counter Section',
};

const fourCounters = [
  {
    initialQuantity: 0,
    endQuantity: 11,
    unit: 'x',
    unitPosition: 'after',
    description: 'faster to deploy',
  },
  {
    initialQuantity: 0,
    endQuantity: 75,
    unit: '1 / ',
    unitPosition: 'before',
    description: 'the size of normal apps',
  },
  {
    initialQuantity: 0,
    endQuantity: 51,
    unit: '%',
    unitPosition: 'after',
    description: 'reduced bounce rate',
  },
  {
    initialQuantity: 0,
    endQuantity: 260,
    unit: '%',
    unitPosition: 'after',
    description: 'more leads',
  },
];

export const standard = () => ({
  component: CounterSectionComponent,
  props: {
    title: 'Statistics about the power of Lyte Tech PWA\'s',
    counters: fourCounters,
  },
});

export const noCounters = () => ({
  component: CounterSectionComponent,
  props: {
    title: 'Statistics about the power of Lyte Tech PWA\'s',
  },
});

export const twoCounters = () => ({
  component: CounterSectionComponent,
  props: {
    title: 'Statistics about the power of Lyte Tech PWA\'s',
    counters: [
      fourCounters[1],
      fourCounters[2],
    ],
  },
});

export const fiveCounters = () => ({
  component: CounterSectionComponent,
  props: {
    title: 'Statistics about the power of Lyte Tech PWA\'s',
    counters: fourCounters.concat(
      {
        initialQuantity: 0,
        endQuantity: 260,
        unit: '%',
        unitPosition: 'after',
        description: 'more leads',
      },
    ),
  },
});
