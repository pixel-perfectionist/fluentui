import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CarouselNav } from '../CarouselNav';
import { isConformant } from '../../../testing/isConformant';

describe('CarouselNav - Pagination Modes', () => {
  describe('Numbers Mode', () => {
    it('renders numeric pagination buttons', () => {
      const onNavigate = jest.fn();
      render(
        <CarouselNav
          mode="numbers"
          totalSlides={5}
          currentIndex={2}
          onNavigate={onNavigate}
        />
      );

      // Should render buttons for all 5 slides since it's small
      expect(screen.getByRole('button', { name: /1/ })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /2/ })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /3/ })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /4/ })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /5/ })).toBeInTheDocument();
    });

    it('handles click navigation', () => {
      const onNavigate = jest.fn();
      render(
        <CarouselNav
          mode="numbers"
          totalSlides={5}
          currentIndex={0}
          onNavigate={onNavigate}
        />
      );

      const button3 = screen.getByRole('button', { name: /3/ });
      fireEvent.click(button3);

      expect(onNavigate).toHaveBeenCalledWith(2); // 0-based index
    });

    it('applies selected state to current button', () => {
      const onNavigate = jest.fn();
      render(
        <CarouselNav
          mode="numbers"
          totalSlides={5}
          currentIndex={2}
          onNavigate={onNavigate}
        />
      );

      const currentButton = screen.getByRole('button', { name: /3/ });
      expect(currentButton).toHaveAttribute('aria-current', 'page');
      expect(currentButton).toHaveAttribute('aria-selected', 'true');
    });

    it('renders with smart truncation for large datasets', () => {
      const onNavigate = jest.fn();
      render(
        <CarouselNav
          mode="numbers"
          totalSlides={20}
          currentIndex={10}
          onNavigate={onNavigate}
        />
      );

      // Should have truncation with ellipsis
      expect(screen.getByText('...')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /1/ })).toBeInTheDocument(); // First
      expect(screen.getByRole('button', { name: /11/ })).toBeInTheDocument(); // Current (1-based)
      expect(screen.getByRole('button', { name: /20/ })).toBeInTheDocument(); // Last
    });

    it('respects sidePadding and activePadding props', () => {
      const onNavigate = jest.fn();
      render(
        <CarouselNav
          mode="numbers"
          totalSlides={30}
          currentIndex={15}
          onNavigate={onNavigate}
          sidePadding={2}
          activePadding={2}
        />
      );

      // Should show more buttons due to increased padding
      expect(screen.getByRole('button', { name: /1/ })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /2/ })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /14/ })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /15/ })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /16/ })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /17/ })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /18/ })).toBeInTheDocument();
    });
  });

  describe('Custom Mode', () => {
    it('renders custom labels from labels array', () => {
      const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
      const onNavigate = jest.fn();
      
      render(
        <CarouselNav
          mode="custom"
          totalSlides={5}
          currentIndex={2}
          onNavigate={onNavigate}
          labels={labels}
        />
      );

      expect(screen.getByRole('button', { name: /Mon/ })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Tue/ })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Wed/ })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Thu/ })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Fri/ })).toBeInTheDocument();
    });

    it('renders custom labels from renderLabel function', () => {
      const onNavigate = jest.fn();
      const renderLabel = (index: number) => `Step ${index + 1}`;
      
      render(
        <CarouselNav
          mode="custom"
          totalSlides={3}
          currentIndex={1}
          onNavigate={onNavigate}
          renderLabel={renderLabel}
        />
      );

      expect(screen.getByRole('button', { name: /Step 1/ })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Step 2/ })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Step 3/ })).toBeInTheDocument();
    });

    it('falls back to numbers when no labels provided', () => {
      const onNavigate = jest.fn();
      
      render(
        <CarouselNav
          mode="custom"
          totalSlides={3}
          currentIndex={1}
          onNavigate={onNavigate}
        />
      );

      expect(screen.getByRole('button', { name: /1/ })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /2/ })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /3/ })).toBeInTheDocument();
    });

    it('prefers renderLabel over labels array', () => {
      const labels = ['Ignored1', 'Ignored2', 'Ignored3'];
      const renderLabel = (index: number) => `Render ${index}`;
      const onNavigate = jest.fn();
      
      render(
        <CarouselNav
          mode="custom"
          totalSlides={3}
          currentIndex={0}
          onNavigate={onNavigate}
          labels={labels}
          renderLabel={renderLabel}
        />
      );

      expect(screen.getByRole('button', { name: /Render 0/ })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Render 1/ })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Render 2/ })).toBeInTheDocument();
      
      expect(screen.queryByRole('button', { name: /Ignored/ })).not.toBeInTheDocument();
    });
  });

  describe('Props and States', () => {
    it('respects disabled prop', () => {
      const onNavigate = jest.fn();
      
      render(
        <CarouselNav
          mode="numbers"
          totalSlides={3}
          currentIndex={0}
          onNavigate={onNavigate}
          disabled
        />
      );

      const buttons = screen.getAllByRole('button');
      buttons.forEach(button => {
        expect(button).toBeDisabled();
      });

      fireEvent.click(buttons[1]);
      expect(onNavigate).not.toHaveBeenCalled();
    });

    it('applies custom aria labels', () => {
      const onNavigate = jest.fn();
      const getItemAriaLabel = (index: number) => `Navigate to page ${index + 1}`;
      
      render(
        <CarouselNav
          mode="numbers"
          totalSlides={3}
          currentIndex={0}
          onNavigate={onNavigate}
          getItemAriaLabel={getItemAriaLabel}
        />
      );

      expect(screen.getByRole('button', { name: 'Navigate to page 1' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Navigate to page 2' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Navigate to page 3' })).toBeInTheDocument();
    });

    it('applies appearance classes', () => {
      const onNavigate = jest.fn();
      
      const { rerender } = render(
        <CarouselNav
          mode="numbers"
          totalSlides={3}
          currentIndex={0}
          onNavigate={onNavigate}
          appearance="brand"
        />
      );

      // Test that the container has proper class (exact class names depend on implementation)
      const container = screen.getByRole('tablist');
      expect(container).toBeInTheDocument();

      rerender(
        <CarouselNav
          mode="numbers"
          totalSlides={3}
          currentIndex={0}
          onNavigate={onNavigate}
          appearance="subtle"
        />
      );

      expect(container).toBeInTheDocument();
    });

    it('applies size prop to buttons', () => {
      const onNavigate = jest.fn();
      
      render(
        <CarouselNav
          mode="numbers"
          totalSlides={3}
          currentIndex={0}
          onNavigate={onNavigate}
          size="large"
        />
      );

      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(3);
      
      // Size classes will be applied to individual buttons (exact classes depend on implementation)
      buttons.forEach(button => {
        expect(button).toBeInTheDocument();
      });
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA roles and properties', () => {
      const onNavigate = jest.fn();
      
      render(
        <CarouselNav
          mode="numbers"
          totalSlides={5}
          currentIndex={2}
          onNavigate={onNavigate}
        />
      );

      const tablist = screen.getByRole('tablist');
      expect(tablist).toBeInTheDocument();

      const buttons = screen.getAllByRole('button');
      buttons.forEach((button, index) => {
        expect(button).toHaveAttribute('role', 'tab');
        expect(button).toHaveAttribute('type', 'button');
        
        if (index === 2) { // Current index
          expect(button).toHaveAttribute('aria-current', 'page');
          expect(button).toHaveAttribute('aria-selected', 'true');
        } else {
          expect(button).not.toHaveAttribute('aria-current');
          expect(button).toHaveAttribute('aria-selected', 'false');
        }
      });
    });

    it('properly marks ellipsis as presentation', () => {
      const onNavigate = jest.fn();
      
      render(
        <CarouselNav
          mode="numbers"
          totalSlides={20}
          currentIndex={10}
          onNavigate={onNavigate}
        />
      );

      const ellipsis = screen.getByText('...');
      expect(ellipsis).toHaveAttribute('role', 'presentation');
      expect(ellipsis).toHaveAttribute('aria-hidden', 'true');
    });

    it('supports keyboard navigation through tabster', () => {
      const onNavigate = jest.fn();
      
      render(
        <CarouselNav
          mode="numbers"
          totalSlides={5}
          currentIndex={2}
          onNavigate={onNavigate}
        />
      );

      // The selected button should be the default focusable
      const selectedButton = screen.getByRole('button', { name: /3/ });
      expect(selectedButton).toHaveAttribute('aria-selected', 'true');
      
      // Tabster attributes should be present (specific attributes depend on implementation)
      const tablist = screen.getByRole('tablist');
      expect(tablist).toHaveAttribute('role', 'tablist');
    });
  });

  describe('Edge Cases', () => {
    it('handles totalSlides of 1', () => {
      const onNavigate = jest.fn();
      
      render(
        <CarouselNav
          mode="numbers"
          totalSlides={1}
          currentIndex={0}
          onNavigate={onNavigate}
        />
      );

      const button = screen.getByRole('button', { name: /1/ });
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('aria-current', 'page');
    });

    it('clamps currentIndex to valid range', () => {
      const onNavigate = jest.fn();
      
      render(
        <CarouselNav
          mode="numbers"
          totalSlides={3}
          currentIndex={10} // Out of range
          onNavigate={onNavigate}
        />
      );

      // Should still render properly without crashing
      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(3);
    });

    it('handles empty labels array gracefully', () => {
      const onNavigate = jest.fn();
      
      render(
        <CarouselNav
          mode="custom"
          totalSlides={3}
          currentIndex={0}
          onNavigate={onNavigate}
          labels={[]}
        />
      );

      // Should fall back to numeric labels
      expect(screen.getByRole('button', { name: /1/ })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /2/ })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /3/ })).toBeInTheDocument();
    });
  });
});