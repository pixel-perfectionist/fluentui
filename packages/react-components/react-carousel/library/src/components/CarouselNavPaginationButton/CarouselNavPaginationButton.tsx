import type { ForwardRefComponent } from '@fluentui/react-utilities';
import * as React from 'react';

import type { CarouselNavPaginationButtonProps } from './CarouselNavPaginationButton.types';
import { renderCarouselNavPaginationButton_unstable } from './renderCarouselNavPaginationButton';
import { useCarouselNavPaginationButton_unstable } from './useCarouselNavPaginationButton';
import { useCarouselNavPaginationButtonStyles_unstable } from './useCarouselNavPaginationButtonStyles.styles';
import { useCustomStyleHook_unstable } from '@fluentui/react-shared-contexts';

/**
 * CarouselNavPaginationButton is a specialized button for carousel navigation
 * that can display numeric labels, custom text, or ellipsis indicators.
 * 
 * It extends the functionality of CarouselNavButton to support text-based labels
 * while maintaining the same theming, accessibility, and interaction patterns.
 */
export const CarouselNavPaginationButton: ForwardRefComponent<CarouselNavPaginationButtonProps> = React.forwardRef(
  (props, ref) => {
    const state = useCarouselNavPaginationButton_unstable(props, ref);

    useCarouselNavPaginationButtonStyles_unstable(state);
    useCustomStyleHook_unstable('useCarouselNavPaginationButtonStyles_unstable')(state);

    return renderCarouselNavPaginationButton_unstable(state);
  }
);

CarouselNavPaginationButton.displayName = 'CarouselNavPaginationButton';