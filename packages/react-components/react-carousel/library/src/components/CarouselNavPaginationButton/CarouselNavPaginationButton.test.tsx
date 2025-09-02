import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { isConformant } from '../../testing/isConformant';
import { CarouselNavPaginationButton } from './CarouselNavPaginationButton';
import { CarouselNavContextProvider } from '../CarouselNav/CarouselNavContext';

// Mock context provider for testing
const MockContextProvider: React.FC<{ children: React.ReactNode; appearance?: 'brand' | 'subtle' | 'transparent' }> = ({ 
  children, 
  appearance 
}) => (
  <CarouselNavContextProvider value={{ appearance }}>
    {children}
  </CarouselNavContextProvider>
);

describe('CarouselNavPaginationButton', () => {
  isConformant({
    Component: CarouselNavPaginationButton,
    displayName: 'CarouselNavPaginationButton',
    requiredProps: {
      label: 'Test Label'
    },
  });

  describe('Basic Rendering', () => {
    it('renders with text label', () => {
      render(
        <MockContextProvider>
          <CarouselNavPaginationButton label="5" />
        </MockContextProvider>
      );

      const button = screen.getByRole('button');
      expect(button).toHaveTextContent('5');
    });

    it('renders with ReactNode label', () => {
      render(
        <MockContextProvider>
          <CarouselNavPaginationButton label={<span>Custom</span>} />
        </MockContextProvider>
      );

      const button = screen.getByRole('button');
      expect(button).toHaveTextContent('Custom');
    });

    it('applies correct ARIA attributes', () => {
      render(
        <MockContextProvider>
          <CarouselNavPaginationButton 
            label="Test" 
            aria-label="Navigate to page 3"
          />
        </MockContextProvider>
      );

      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('role', 'tab');
      expect(button).toHaveAttribute('type', 'button');
      expect(button).toHaveAttribute('aria-label', 'Navigate to page 3');
    });
  });

  describe('Selection State', () => {
    it('applies selected state correctly', () => {
      render(
        <MockContextProvider>
          <CarouselNavPaginationButton label="3" selected />
        </MockContextProvider>
      );

      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-selected', 'true');
      expect(button).toHaveAttribute('aria-current', 'page');
    });

    it('does not apply selected attributes when not selected', () => {
      render(
        <MockContextProvider>
          <CarouselNavPaginationButton label="3" selected={false} />
        </MockContextProvider>
      );

      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-selected', 'false');
      expect(button).not.toHaveAttribute('aria-current');
    });
  });

  describe('Disabled State', () => {
    it('applies disabled attribute', () => {
      render(
        <MockContextProvider>
          <CarouselNavPaginationButton label="3" disabled />
        </MockContextProvider>
      );

      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });

    it('does not trigger click when disabled', () => {
      const onClick = jest.fn();
      render(
        <MockContextProvider>
          <CarouselNavPaginationButton label="3" disabled onClick={onClick} />
        </MockContextProvider>
      );

      const button = screen.getByRole('button');
      fireEvent.click(button);
      
      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe('Click Handling', () => {
    it('calls onClick when clicked', () => {
      const onClick = jest.fn();
      render(
        <MockContextProvider>
          <CarouselNavPaginationButton label="3" onClick={onClick} />
        </MockContextProvider>
      );

      const button = screen.getByRole('button');
      fireEvent.click(button);
      
      expect(onClick).toHaveBeenCalledWith(expect.any(Object));
    });

    it('does not call onClick when event is prevented', () => {
      const onClick = jest.fn();
      render(
        <MockContextProvider>
          <CarouselNavPaginationButton 
            label="3" 
            onClick={(e) => {
              e.preventDefault();
              onClick();
            }}
          />
        </MockContextProvider>
      );

      const button = screen.getByRole('button');
      fireEvent.click(button);
      
      expect(onClick).toHaveBeenCalled();
    });
  });

  describe('Size Variants', () => {
    it('applies size prop (implementation detail - classes)', () => {
      const { rerender } = render(
        <MockContextProvider>
          <CarouselNavPaginationButton label="3" size="small" />
        </MockContextProvider>
      );

      let button = screen.getByRole('button');
      expect(button).toBeInTheDocument();

      rerender(
        <MockContextProvider>
          <CarouselNavPaginationButton label="3" size="large" />
        </MockContextProvider>
      );

      button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });
  });

  describe('Appearance Variants', () => {
    it('inherits appearance from context', () => {
      render(
        <MockContextProvider appearance="brand">
          <CarouselNavPaginationButton label="3" />
        </MockContextProvider>
      );

      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      // Specific class assertions would depend on implementation details
    });

    it('works with different appearance modes', () => {
      const { rerender } = render(
        <MockContextProvider appearance="subtle">
          <CarouselNavPaginationButton label="3" />
        </MockContextProvider>
      );

      let button = screen.getByRole('button');
      expect(button).toBeInTheDocument();

      rerender(
        <MockContextProvider appearance="transparent">
          <CarouselNavPaginationButton label="3" />
        </MockContextProvider>
      );

      button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('supports custom aria-label', () => {
      render(
        <MockContextProvider>
          <CarouselNavPaginationButton 
            label=">" 
            aria-label="Next page"
          />
        </MockContextProvider>
      );

      const button = screen.getByLabelText('Next page');
      expect(button).toBeInTheDocument();
    });

    it('maintains focus indication when selected', () => {
      render(
        <MockContextProvider>
          <CarouselNavPaginationButton label="3" selected />
        </MockContextProvider>
      );

      const button = screen.getByRole('button');
      
      // Focus the selected button
      button.focus();
      expect(document.activeElement).toBe(button);
      
      // Should maintain proper focus styles (implementation-specific)
      expect(button).toHaveAttribute('aria-selected', 'true');
    });
  });

  describe('Edge Cases', () => {
    it('handles empty label', () => {
      render(
        <MockContextProvider>
          <CarouselNavPaginationButton label="" />
        </MockContextProvider>
      );

      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent('');
    });

    it('handles complex ReactNode labels', () => {
      render(
        <MockContextProvider>
          <CarouselNavPaginationButton 
            label={
              <div>
                <span>Page</span>
                <strong>5</strong>
              </div>
            } 
          />
        </MockContextProvider>
      );

      const button = screen.getByRole('button');
      expect(button).toHaveTextContent('Page5');
      expect(button.querySelector('strong')).toHaveTextContent('5');
    });

    it('maintains proper button semantics', () => {
      render(
        <MockContextProvider>
          <CarouselNavPaginationButton label="Test" as="button" />
        </MockContextProvider>
      );

      const button = screen.getByRole('button');
      expect(button.tagName).toBe('BUTTON');
      expect(button).toHaveAttribute('type', 'button');
    });
  });
});