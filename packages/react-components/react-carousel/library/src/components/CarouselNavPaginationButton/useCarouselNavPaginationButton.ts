import { type ARIAButtonElement, type ARIAButtonSlotProps, useARIAButtonProps } from '@fluentui/react-aria';
import { useTabsterAttributes } from '@fluentui/react-tabster';
import {
  getIntrinsicElementProps,
  isHTMLElement,
  slot,
  useEventCallback,
  useMergedRefs,
} from '@fluentui/react-utilities';
import * as React from 'react';

import { useCarouselNavContext } from '../CarouselNav/CarouselNavContext';
import type { CarouselNavPaginationButtonProps, CarouselNavPaginationButtonState } from './CarouselNavPaginationButton.types';

/**
 * Create the state required to render CarouselNavPaginationButton.
 *
 * The returned state can be modified with hooks such as useCarouselNavPaginationButtonStyles_unstable,
 * before being passed to renderCarouselNavPaginationButton_unstable.
 *
 * @param props - props from this instance of CarouselNavPaginationButton
 * @param ref - reference to root HTMLElement of CarouselNavPaginationButton
 */
export const useCarouselNavPaginationButton_unstable = (
  props: CarouselNavPaginationButtonProps,
  ref: React.Ref<ARIAButtonElement>,
): CarouselNavPaginationButtonState => {
  const { onClick, as = 'button', label, selected, size, disabled } = props;

  const { appearance } = useCarouselNavContext();

  const defaultTabProps = useTabsterAttributes({
    focusable: { isDefault: selected },
  });

  const buttonRef = React.useRef<HTMLElement>();
  const _paginationButton = slot.always<ARIAButtonSlotProps>(
    getIntrinsicElementProps(as, useARIAButtonProps(props.as, props)),
    {
      elementType: 'button',
      defaultProps: {
        ref: useMergedRefs(ref, buttonRef),
        role: 'tab',
        type: 'button',
        'aria-selected': selected,
        'aria-current': selected ? 'page' : undefined,
        disabled,
        ...defaultTabProps,
      },
    },
  );

  // Override onClick to preserve any custom click handlers
  const handleClick: ARIAButtonSlotProps['onClick'] = useEventCallback(event => {
    onClick?.(event);
    
    if (event.defaultPrevented || disabled) {
      return;
    }
    
    // The parent component will handle the actual navigation logic
    // This button is just a presentation layer
  });

  _paginationButton.onClick = handleClick;

  const state: CarouselNavPaginationButtonState = {
    label,
    selected,
    size,
    disabled,
    appearance,
    components: {
      root: 'button',
    },
    root: _paginationButton,
  };

  return state;
};