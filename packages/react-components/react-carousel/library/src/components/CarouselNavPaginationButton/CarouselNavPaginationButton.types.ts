import { ARIAButtonSlotProps } from '@fluentui/react-aria';
import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';
import * as React from 'react';
import { CarouselNavState } from '../CarouselNav/CarouselNav.types';

export type CarouselNavPaginationButtonSlots = {
  /**
   * ARIA compliant nav button for pagination
   */
  root: NonNullable<Slot<ARIAButtonSlotProps>>;
};

/**
 * CarouselNavPaginationButton Props
 */
export type CarouselNavPaginationButtonProps = ComponentProps<CarouselNavPaginationButtonSlots> & {
  /** The label content to display in the button */
  label: React.ReactNode;
  /** Whether this button represents the current active slide */
  selected?: boolean;
  /** Size of the button */
  size?: 'small' | 'medium' | 'large';
  /** Whether the button is disabled */
  disabled?: boolean;
};

/**
 * State used in rendering CarouselNavPaginationButton
 */
export type CarouselNavPaginationButtonState = ComponentState<CarouselNavPaginationButtonSlots> & {
  /** The label content to display */
  label: React.ReactNode;
  /** Whether this button is selected/active */
  selected?: boolean;
  /** Size of the button */
  size?: 'small' | 'medium' | 'large';
  /** Whether the button is disabled */
  disabled?: boolean;
} & Pick<CarouselNavState, 'appearance'>;