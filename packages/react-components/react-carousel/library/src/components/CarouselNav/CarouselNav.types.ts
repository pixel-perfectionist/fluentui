import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';
import * as React from 'react';

/**
 * Pagination mode for CarouselNav
 */
export type PaginationMode = 'dots' | 'numbers' | 'custom';

export type CarouselNavSlots = {
  /**
   * The element wrapping the carousel pagination. By default, this is a div.
   */
  root: NonNullable<Slot<'div'>>;
};

export type NavButtonRenderFunction = (index: number) => React.ReactNode;

export type CarouselNavState = ComponentState<CarouselNavSlots> & {
  /**
   * Enables an alternate brand style when set to 'brand'
   */
  appearance?: 'brand' | 'transparent' | 'subtle';

  /**
   * The function that will render nav items based on total slides and their index.
   * Used when children prop is provided.
   */
  renderNavButton?: NavButtonRenderFunction;

  /**
   * The total number of slides available.
   * Users may override if using the component without a Carousel wrapper or implementing custom functionality.
   */
  totalSlides: number;

  /**
   * Pagination mode when using built-in pagination
   */
  mode?: PaginationMode;

  /**
   * Current active index (0-based) when using built-in pagination
   */
  currentIndex?: number;

  /**
   * Callback fired when a nav button is clicked
   */
  onNavigate?: (index: number) => void;

  /**
   * Number of items to always show at start and end when using numbers mode
   */
  sidePadding?: number;

  /**
   * Number of neighbors to show around active index when using numbers mode
   */
  activePadding?: number;

  /**
   * Custom labels array for custom mode
   */
  labels?: string[];

  /**
   * Custom render function for labels in custom mode
   */
  renderLabel?: (index: number) => React.ReactNode;

  /**
   * Custom aria-label function for nav buttons
   */
  getItemAriaLabel?: (index: number) => string;

  /**
   * Size of the nav buttons
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Whether nav buttons are disabled
   */
  disabled?: boolean;
};

export type CarouselNavProps = Omit<ComponentProps<Partial<CarouselNavSlots>>, 'children'> & {
  /**
   * Render function for nav buttons. When provided, uses legacy render-prop API.
   * When omitted, uses the new built-in pagination modes based on `mode` prop.
   */
  children?: NavButtonRenderFunction;

  /**
   * Pagination mode for built-in pagination. Only used when `children` is not provided.
   * @default 'dots'
   */
  mode?: PaginationMode;

  /**
   * Current active index (0-based). Required when using built-in pagination modes.
   */
  currentIndex?: number;

  /**
   * Callback fired when a nav button is clicked. Required when using built-in pagination modes.
   */
  onNavigate?: (index: number) => void;

  /**
   * Number of items to always show at start and end when using numbers mode.
   * @default 1
   */
  sidePadding?: number;

  /**
   * Number of neighbors to show around active index when using numbers mode.
   * @default 1
   */
  activePadding?: number;

  /**
   * Custom labels array for custom mode. Length must equal totalSlides.
   */
  labels?: string[];

  /**
   * Custom render function for labels in custom mode.
   */
  renderLabel?: (index: number) => React.ReactNode;

  /**
   * Custom aria-label function for nav buttons.
   * @default (index) => `Carousel Nav Button ${index + 1}`
   */
  getItemAriaLabel?: (index: number) => string;

  /**
   * Size of the nav buttons.
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Whether nav buttons are disabled.
   * @default false
   */
  disabled?: boolean;
} & Partial<Pick<CarouselNavState, 'appearance' | 'totalSlides'>>;

export type CarouselNavContextValue = Pick<CarouselNavState, 'appearance'>;
