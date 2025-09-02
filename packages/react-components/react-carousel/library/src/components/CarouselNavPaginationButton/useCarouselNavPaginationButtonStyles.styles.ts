import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { SlotClassNames } from '@fluentui/react-utilities';
import type { CarouselNavPaginationButtonSlots, CarouselNavPaginationButtonState } from './CarouselNavPaginationButton.types';
import { createCustomFocusIndicatorStyle } from '@fluentui/react-tabster';
import { tokens } from '@fluentui/react-theme';

export const carouselNavPaginationButtonClassNames: SlotClassNames<CarouselNavPaginationButtonSlots> = {
  root: 'fui-CarouselNavPaginationButton',
};

/**
 * Styles for the pagination button - reuses and adapts CarouselNavButton styles for text content
 */
const useStyles = makeStyles({
  root: {
    cursor: 'pointer',
    pointerEvents: 'all',
    minWidth: tokens.spacingHorizontalXL,
    height: tokens.spacingVerticalXL,
    padding: `${tokens.spacingVerticalXS} ${tokens.spacingHorizontalS}`,
    boxSizing: 'border-box',
    backgroundColor: tokens.colorTransparentBackground,
    color: tokens.colorNeutralForeground1,
    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSizeBase200,
    fontWeight: tokens.fontWeightRegular,
    lineHeight: tokens.lineHeightBase200,
    textAlign: 'center',
    borderRadius: tokens.borderRadiusSmall,
    ...shorthands.border(tokens.strokeWidthThin, 'solid', tokens.colorNeutralStroke1),
    
    '@media (forced-colors: active)': {
      forcedColorAdjust: 'none',
      color: 'white',
      backgroundColor: 'transparent',
      borderColor: 'white',
    },
  },
  rootUnselected: {
    ...createCustomFocusIndicatorStyle({
      border: `${tokens.strokeWidthThick} solid ${tokens.colorStrokeFocus2}`,
      margin: `calc(-1 * ${tokens.strokeWidthThick})`,
      borderRadius: tokens.borderRadiusMedium,
    }),
    
    ':hover': {
      backgroundColor: tokens.colorNeutralBackground1Hover,
      borderColor: tokens.colorNeutralStroke1Hover,
      color: tokens.colorNeutralForeground1,
    },
    
    ':active': {
      backgroundColor: tokens.colorNeutralBackground1Pressed,
      borderColor: tokens.colorNeutralStroke1Pressed,
      color: tokens.colorNeutralForeground1,
    },
  },
  rootSelected: {
    backgroundColor: tokens.colorNeutralForeground1,
    borderColor: tokens.colorNeutralForeground1,
    color: tokens.colorNeutralBackground1,
    
    ':hover': {
      backgroundColor: tokens.colorNeutralForeground1Hover,
      borderColor: tokens.colorNeutralForeground1Hover,
    },
    
    ':active': {
      backgroundColor: tokens.colorNeutralForeground1Pressed,
      borderColor: tokens.colorNeutralForeground1Pressed,
    },
    
    '@media (forced-colors: active)': {
      backgroundColor: 'white',
      color: 'black',
      borderColor: 'white',
    },
  },
  rootDisabled: {
    cursor: 'not-allowed',
    backgroundColor: tokens.colorNeutralBackgroundDisabled,
    borderColor: tokens.colorNeutralStrokeDisabled,
    color: tokens.colorNeutralForegroundDisabled,
    
    ':hover': {
      backgroundColor: tokens.colorNeutralBackgroundDisabled,
      borderColor: tokens.colorNeutralStrokeDisabled,
      color: tokens.colorNeutralForegroundDisabled,
    },
    
    ':active': {
      backgroundColor: tokens.colorNeutralBackgroundDisabled,
      borderColor: tokens.colorNeutralStrokeDisabled,
      color: tokens.colorNeutralForegroundDisabled,
    },
  },
  // Size variations
  small: {
    minWidth: tokens.spacingHorizontalM,
    height: tokens.spacingVerticalM,
    fontSize: tokens.fontSizeBase100,
    lineHeight: tokens.lineHeightBase100,
    padding: `${tokens.spacingVerticalXXS} ${tokens.spacingHorizontalXS}`,
  },
  medium: {
    // Default size - already defined in root
  },
  large: {
    minWidth: tokens.spacingHorizontalXXL,
    height: tokens.spacingVerticalXXL,
    fontSize: tokens.fontSizeBase300,
    lineHeight: tokens.lineHeightBase300,
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalM}`,
  },
  // Appearance variations
  brand: {
    color: tokens.colorBrandForeground1,
    borderColor: tokens.colorBrandStroke1,
    
    ':hover': {
      backgroundColor: tokens.colorBrandBackground1Hover,
      borderColor: tokens.colorBrandStroke1Hover,
    },
    
    ':active': {
      backgroundColor: tokens.colorBrandBackground1Pressed,
      borderColor: tokens.colorBrandStroke1Pressed,
    },
  },
  brandSelected: {
    backgroundColor: tokens.colorBrandBackground1,
    borderColor: tokens.colorBrandBackground1,
    color: tokens.colorNeutralForegroundOnBrand,
    
    ':hover': {
      backgroundColor: tokens.colorBrandBackground1Hover,
      borderColor: tokens.colorBrandBackground1Hover,
    },
    
    ':active': {
      backgroundColor: tokens.colorBrandBackground1Pressed,
      borderColor: tokens.colorBrandBackground1Pressed,
    },
  },
  subtle: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: tokens.colorNeutralForeground2,
    
    ':hover': {
      backgroundColor: tokens.colorSubtleBackgroundHover,
      color: tokens.colorNeutralForeground2Hover,
    },
    
    ':active': {
      backgroundColor: tokens.colorSubtleBackgroundPressed,
      color: tokens.colorNeutralForeground2Pressed,
    },
  },
  subtleSelected: {
    backgroundColor: tokens.colorSubtleBackgroundSelected,
    color: tokens.colorNeutralForeground1,
    
    ':hover': {
      backgroundColor: tokens.colorSubtleBackgroundHover,
    },
    
    ':active': {
      backgroundColor: tokens.colorSubtleBackgroundPressed,
    },
  },
  transparent: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    
    ':hover': {
      backgroundColor: tokens.colorTransparentBackgroundHover,
      borderColor: tokens.colorTransparentStrokeInteractive,
    },
    
    ':active': {
      backgroundColor: tokens.colorTransparentBackgroundPressed,
      borderColor: tokens.colorTransparentStrokeInteractive,
    },
  },
  transparentSelected: {
    backgroundColor: tokens.colorTransparentBackgroundSelected,
    borderColor: tokens.colorTransparentStroke,
    
    ':hover': {
      backgroundColor: tokens.colorTransparentBackgroundHover,
    },
    
    ':active': {
      backgroundColor: tokens.colorTransparentBackgroundPressed,
    },
  },
  ellipsis: {
    cursor: 'default',
    pointerEvents: 'none',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: tokens.colorNeutralForeground2,
    
    ':hover': {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: tokens.colorNeutralForeground2,
    },
    
    ':active': {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: tokens.colorNeutralForeground2,
    },
  },
});

/**
 * Apply styling to the CarouselNavPaginationButton slots based on the state
 */
export const useCarouselNavPaginationButtonStyles_unstable = (
  state: CarouselNavPaginationButtonState,
): CarouselNavPaginationButtonState => {
  'use no memo';

  const styles = useStyles();
  const { appearance, selected, disabled, size } = state;

  state.root.className = mergeClasses(
    carouselNavPaginationButtonClassNames.root,
    styles.root,
    
    // Size styles
    size === 'small' && styles.small,
    size === 'large' && styles.large,
    
    // Selection and disabled states
    disabled ? styles.rootDisabled : (
      selected ? styles.rootSelected : styles.rootUnselected
    ),
    
    // Appearance styles
    appearance === 'brand' && (selected ? styles.brandSelected : styles.brand),
    appearance === 'subtle' && (selected ? styles.subtleSelected : styles.subtle),
    appearance === 'transparent' && (selected ? styles.transparentSelected : styles.transparent),
    
    // Override for ellipsis (non-interactive)
    state.label === '...' && styles.ellipsis,
    
    state.root.className,
  );

  return state;
};