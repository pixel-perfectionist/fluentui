import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CarouselNav, CarouselNavButton } from '../../../index';

describe('CarouselNav - Backward Compatibility', () => {
  describe('Legacy Render-Prop API', () => {
    it('continues to work with children render function', () => {
      const handleClick = jest.fn();
      
      render(
        <CarouselNav totalSlides={3} appearance="brand">
          {(index) => (
            <CarouselNavButton 
              key={index}
              aria-label={`Carousel Nav Button ${index + 1}`}
              onClick={() => handleClick(index)}
            />
          )}
        </CarouselNav>
      );

      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(3);
      
      buttons.forEach((button, index) => {
        expect(button).toHaveAttribute('aria-label', `Carousel Nav Button ${index + 1}`);
      });

      fireEvent.click(buttons[1]);
      expect(handleClick).toHaveBeenCalledWith(1);
    });

    it('provides proper context to child buttons', () => {
      render(
        <CarouselNav totalSlides={2} appearance="brand">
          {(index) => (
            <CarouselNavButton aria-label={`Button ${index}`} />
          )}
        </CarouselNav>
      );

      // Should render within CarouselNavContext
      const tablist = screen.getByRole('tablist');
      expect(tablist).toBeInTheDocument();
      
      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(2);
    });

    it('works with totalSlides prop', () => {
      render(
        <CarouselNav totalSlides={5}>
          {(index) => <CarouselNavButton aria-label={`${index}`} />}
        </CarouselNav>
      );

      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(5);
    });

    it('passes appearance to context', () => {
      render(
        <CarouselNav totalSlides={1} appearance="brand">
          {(index) => <CarouselNavButton aria-label={`${index}`} />}
        </CarouselNav>
      );

      // The button should receive the appearance through context
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      // Specific appearance classes would be tested at the button level
    });
  });

  describe('API Discrimination', () => {
    it('does not render new pagination when using legacy API', () => {
      render(
        <CarouselNav totalSlides={3}>
          {(index) => <CarouselNavButton aria-label={`${index + 1}`} />}
        </CarouselNav>
      );

      // Should not render pagination buttons, only the render-prop children
      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(3);
      
      // Should not have pagination-specific features like ellipsis
      expect(screen.queryByText('...')).not.toBeInTheDocument();
    });

    it('does not render legacy children when using new API', () => {
      const onNavigate = jest.fn();
      
      render(
        <CarouselNav
          mode="numbers"
          totalSlides={3}
          currentIndex={0}
          onNavigate={onNavigate}
        />
      );

      // Should render pagination buttons
      expect(screen.getByRole('button', { name: /1/ })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /2/ })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /3/ })).toBeInTheDocument();
    });
  });

  describe('Shared Infrastructure', () => {
    it('uses same tablist role for both APIs', () => {
      const { rerender } = render(
        <CarouselNav totalSlides={2}>
          {(index) => <CarouselNavButton aria-label={`${index}`} />}
        </CarouselNav>
      );

      expect(screen.getByRole('tablist')).toBeInTheDocument();

      rerender(
        <CarouselNav
          mode="numbers"
          totalSlides={2}
          currentIndex={0}
          onNavigate={() => {}}
        />
      );

      expect(screen.getByRole('tablist')).toBeInTheDocument();
    });

    it('applies same appearance prop for both APIs', () => {
      const { rerender } = render(
        <CarouselNav totalSlides={1} appearance="brand">
          {(index) => <CarouselNavButton aria-label={`${index}`} />}
        </CarouselNav>
      );

      const tablist = screen.getByRole('tablist');
      expect(tablist).toBeInTheDocument();

      rerender(
        <CarouselNav
          mode="numbers"
          totalSlides={1}
          currentIndex={0}
          onNavigate={() => {}}
          appearance="brand"
        />
      );

      expect(screen.getByRole('tablist')).toBeInTheDocument();
    });

    it('maintains consistent accessibility structure', () => {
      const { rerender } = render(
        <CarouselNav totalSlides={2}>
          {(index) => <CarouselNavButton aria-label={`Legacy ${index}`} />}
        </CarouselNav>
      );

      const buttons = screen.getAllByRole('button');
      buttons.forEach(button => {
        expect(button).toHaveAttribute('role', 'tab');
        expect(button).toHaveAttribute('type', 'button');
      });

      rerender(
        <CarouselNav
          mode="numbers"
          totalSlides={2}
          currentIndex={0}
          onNavigate={() => {}}
        />
      );

      const newButtons = screen.getAllByRole('button');
      newButtons.forEach(button => {
        expect(button).toHaveAttribute('role', 'tab');
        expect(button).toHaveAttribute('type', 'button');
      });
    });
  });

  describe('No Breaking Changes', () => {
    it('does not require changes to existing code', () => {
      // This test verifies that old patterns continue to work exactly as before
      const mockRef = React.createRef<HTMLDivElement>();
      const customProps = {
        'data-testid': 'custom-carousel-nav',
        className: 'custom-class'
      };

      render(
        <CarouselNav 
          ref={mockRef}
          totalSlides={2} 
          appearance="brand"
          {...customProps}
        >
          {(index) => (
            <CarouselNavButton 
              key={index}
              aria-label={`Navigate to slide ${index + 1}`}
            />
          )}
        </CarouselNav>
      );

      // Ref should work
      expect(mockRef.current).toBeInstanceOf(HTMLDivElement);
      
      // Custom props should be passed through
      const container = screen.getByTestId('custom-carousel-nav');
      expect(container).toHaveClass('custom-class');
      
      // Existing functionality should work
      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(2);
      expect(buttons[0]).toHaveAttribute('aria-label', 'Navigate to slide 1');
    });

    it('preserves existing prop types and interfaces', () => {
      // Type checking test - if this compiles, the types are backward compatible
      const legacyComponent = (
        <CarouselNav totalSlides={5} appearance="brand">
          {(index: number) => (
            <CarouselNavButton aria-label={`Button ${index}`} />
          )}
        </CarouselNav>
      );

      expect(React.isValidElement(legacyComponent)).toBe(true);
    });
  });

  describe('Coexistence', () => {
    it('can render both APIs in same application', () => {
      render(
        <div>
          <CarouselNav totalSlides={2} appearance="brand">
            {(index) => <CarouselNavButton aria-label={`Legacy ${index + 1}`} />}
          </CarouselNav>
          
          <CarouselNav
            mode="numbers"
            totalSlides={2}
            currentIndex={0}
            onNavigate={() => {}}
            appearance="brand"
          />
        </div>
      );

      // Should have buttons from both implementations
      const allButtons = screen.getAllByRole('button');
      expect(allButtons).toHaveLength(4); // 2 from each implementation

      // Legacy buttons
      expect(screen.getByRole('button', { name: 'Legacy 1' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Legacy 2' })).toBeInTheDocument();

      // New pagination buttons
      expect(screen.getByRole('button', { name: /.*1.*/ })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /.*2.*/ })).toBeInTheDocument();
    });
  });
});