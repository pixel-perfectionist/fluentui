/** @jsxRuntime automatic */
/** @jsxImportSource @fluentui/react-jsx-runtime */

import { assertSlots } from '@fluentui/react-utilities';

import type { CarouselNavPaginationButtonState, CarouselNavPaginationButtonSlots } from './CarouselNavPaginationButton.types';

/**
 * Render the final JSX of CarouselNavPaginationButton
 */
export const renderCarouselNavPaginationButton_unstable = (state: CarouselNavPaginationButtonState) => {
  assertSlots<CarouselNavPaginationButtonSlots>(state);

  const { label } = state;

  return (
    <state.root>
      {label}
    </state.root>
  );
};