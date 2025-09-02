/** @jsxRuntime automatic */
/** @jsxImportSource @fluentui/react-jsx-runtime */

import { assertSlots } from '@fluentui/react-utilities';
import * as React from 'react';

import type { CarouselNavState, CarouselNavSlots } from './CarouselNav.types';
import { CarouselNavContextProvider, type CarouselNavContextValues } from './CarouselNavContext';
import { CarouselNavIndexContextProvider } from './CarouselNavIndexContext';
import { getPaginationRange, type PaginationItem } from './getPaginationRange';
import { CarouselNavPaginationButton } from '../CarouselNavPaginationButton/CarouselNavPaginationButton';

/**
 * Helper component to render ellipsis as non-interactive text
 */
const EllipsisIndicator: React.FC = () => (
  <span
    role="presentation"
    aria-hidden="true"
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '32px',
      height: '32px',
      color: 'var(--colorNeutralForeground2)',
      fontSize: '14px',
      userSelect: 'none',
    }}
  >
    ...
  </span>
);

/**
 * Render pagination items for built-in pagination modes (numbers, custom)
 */
const renderPaginationItems = (state: CarouselNavState): React.ReactNode[] => {
  const {
    totalSlides,
    mode,
    currentIndex,
    onNavigate,
    sidePadding = 1,
    activePadding = 1,
    labels,
    renderLabel,
    getItemAriaLabel,
    size,
    disabled,
  } = state;

  if (!mode || mode === 'dots' || currentIndex === undefined || !onNavigate) {
    return [];
  }

  // Get pagination range for smart truncation
  const paginationItems: PaginationItem[] = getPaginationRange({
    total: totalSlides,
    current: currentIndex,
    sidePadding,
    activePadding,
  });

  return paginationItems.map((item, itemIndex) => {
    if (item === 'ellipsis') {
      return <EllipsisIndicator key={`ellipsis-${itemIndex}`} />;
    }

    // item is a slide index
    const slideIndex = item as number;
    const isSelected = slideIndex === currentIndex;

    // Determine label content
    let label: React.ReactNode;
    if (mode === 'numbers') {
      label = slideIndex + 1; // Convert to 1-based display
    } else if (mode === 'custom') {
      if (renderLabel) {
        label = renderLabel(slideIndex);
      } else if (labels && labels[slideIndex]) {
        label = labels[slideIndex];
      } else {
        label = slideIndex + 1; // Fallback to numbers
      }
    }

    // Determine aria-label
    const ariaLabel = getItemAriaLabel ? getItemAriaLabel(slideIndex) : `Carousel Nav Button ${slideIndex + 1}`;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled && !event.defaultPrevented) {
        onNavigate(slideIndex);
      }
    };

    return (
      <CarouselNavPaginationButton
        key={slideIndex}
        label={label}
        selected={isSelected}
        size={size}
        disabled={disabled}
        aria-label={ariaLabel}
        onClick={handleClick}
      />
    );
  });
};

/**
 * Render the final JSX of CarouselNav
 */
export const renderCarouselNav_unstable = (state: CarouselNavState, contextValues: CarouselNavContextValues) => {
  assertSlots<CarouselNavSlots>(state);

  const { totalSlides, renderNavButton } = state;

  // Use legacy render-prop API when children is provided, otherwise use built-in pagination
  const useLegacyMode = !!renderNavButton;

  return (
    <state.root>
      <CarouselNavContextProvider value={contextValues.carouselNav}>
        {useLegacyMode
          ? // Legacy render-prop API
            new Array(totalSlides).fill(null).map((_, index) => (
              <CarouselNavIndexContextProvider key={index} value={index}>
                {renderNavButton!(index)}
              </CarouselNavIndexContextProvider>
            ))
          : // Built-in pagination modes
            renderPaginationItems(state)}
      </CarouselNavContextProvider>
    </state.root>
  );
};
