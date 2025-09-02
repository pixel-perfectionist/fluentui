import { CarouselNav } from '@fluentui/react-components';

import descriptionMd from './CarouselNavDescription.md';
import bestPracticesMd from './CarouselNavBestPractices.md';

// Legacy API (unchanged)
export { Default } from './CarouselNavDefault.stories';

// Consolidated pagination examples
export { NumericPagination, CustomLabels } from './CarouselNavPagination.stories';

// Appearance variations and backward compatibility
export { AppearanceVariations, BackwardCompatibility } from './CarouselNavVariations.stories';

export default {
  title: 'Components/Carousel/CarouselNav',
  component: CarouselNav,
  parameters: {
    docs: {
      description: {
        component: [descriptionMd, bestPracticesMd].join('\n'),
      },
    },
  },
};
