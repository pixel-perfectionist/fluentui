import { CarouselNav } from '@fluentui/react-components';
import { Field, makeStyles, Slider, Switch, tokens, Text } from '@fluentui/react-components';
import * as React from 'react';

const useClasses = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: tokens.spacingVerticalL,
    maxWidth: '900px',
    margin: '0 auto',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: tokens.spacingVerticalL,
    border: `${tokens.strokeWidthThicker} solid ${tokens.colorNeutralForeground3}`,
    borderRadius: tokens.borderRadiusMedium,
    padding: tokens.spacingVerticalXXL,
    minHeight: '200px',
  },
  controls: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: tokens.spacingVerticalM,
    padding: tokens.spacingVerticalL,
    backgroundColor: tokens.colorNeutralBackground2,
    borderRadius: tokens.borderRadiusMedium,
  },
  controlField: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalXS,
  },
  title: {
    textAlign: 'center',
    marginBottom: tokens.spacingVerticalM,
  },
  description: {
    textAlign: 'center',
    maxWidth: '500px',
    color: tokens.colorNeutralForeground2,
  },
});

export const NumericPagination = () => {
  const classes = useClasses();
  const [currentIndex, setCurrentIndex] = React.useState(10);
  const [totalSlides, setTotalSlides] = React.useState(25);
  const [sidePadding, setSidePadding] = React.useState(1);
  const [activePadding, setActivePadding] = React.useState(1);

  return (
    <div className={classes.container}>
      <div className={classes.controls}>
        <div className={classes.controlField}>
          <Text weight="semibold">Total Slides: {totalSlides}</Text>
          <Slider
            min={5}
            max={100}
            step={1}
            value={totalSlides}
            onChange={(_, data) => {
              setTotalSlides(data.value);
              setCurrentIndex(Math.min(currentIndex, data.value - 1));
            }}
          />
        </div>

        <div className={classes.controlField}>
          <Text weight="semibold">Current Index: {currentIndex + 1}</Text>
          <Slider
            min={0}
            max={totalSlides - 1}
            step={1}
            value={currentIndex}
            onChange={(_, data) => setCurrentIndex(data.value)}
          />
        </div>

        <div className={classes.controlField}>
          <Text weight="semibold">Side Padding: {sidePadding}</Text>
          <Text size={200}>Items at start/end</Text>
          <Slider
            min={1}
            max={5}
            step={1}
            value={sidePadding}
            onChange={(_, data) => setSidePadding(data.value)}
          />
        </div>

        <div className={classes.controlField}>
          <Text weight="semibold">Active Padding: {activePadding}</Text>
          <Text size={200}>Neighbors around current</Text>
          <Slider
            min={1}
            max={5}
            step={1}
            value={activePadding}
            onChange={(_, data) => setActivePadding(data.value)}
          />
        </div>
      </div>

      <div className={classes.card}>
        <Text size={500} weight="semibold" className={classes.title}>
          Numeric Pagination with Smart Truncation
        </Text>
        
        <CarouselNav
          mode="numbers"
          totalSlides={totalSlides}
          currentIndex={currentIndex}
          onNavigate={setCurrentIndex}
          sidePadding={sidePadding}
          activePadding={activePadding}
          appearance="brand"
          getItemAriaLabel={(index) => `Navigate to slide ${index + 1}`}
        />

        <div style={{ textAlign: 'center' }}>
          <Text size={300}>
            Current: Slide {currentIndex + 1} of {totalSlides}
          </Text>
          <Text size={200} className={classes.description}>
            Demonstrates smart truncation with ellipsis. Shows start ({sidePadding} items), 
            active neighbors (±{activePadding}), and end ({sidePadding} items).
          </Text>
        </div>
      </div>
    </div>
  );
};

export const CustomLabels = () => {
  const classes = useClasses();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [showFallback, setShowFallback] = React.useState(false);
  
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const shortWeekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  // Demonstrate fallback behavior
  const labels = showFallback ? ['Custom', 'Labels'] : shortWeekdays; // Incomplete array for fallback demo

  return (
    <div className={classes.container}>
      <div className={classes.controls}>
        <Text size={400} weight="semibold">Custom Labels Demo</Text>
        <Field>
          <Switch
            checked={showFallback}
            onChange={(_, data) => {
              setShowFallback(data.checked);
              setCurrentIndex(0);
            }}
            label={showFallback ? 'Showing fallback behavior (incomplete labels)' : 'Showing complete weekday labels'}
          />
        </Field>
      </div>

      <div className={classes.card}>
        <Text size={400} weight="semibold">
          {showFallback ? 'Custom Labels with Fallback' : 'Weekday Navigation'}
        </Text>
        
        <CarouselNav
          mode="custom"
          totalSlides={7}
          currentIndex={currentIndex}
          onNavigate={setCurrentIndex}
          labels={labels}
          appearance="brand"
          getItemAriaLabel={(index) => `Select ${weekdays[index]}`}
        />

        <div style={{ textAlign: 'center' }}>
          <Text size={300}>
            Selected: {weekdays[currentIndex]}
          </Text>
          <Text size={200} className={classes.description}>
            {showFallback 
              ? 'When labels array is incomplete, missing items fall back to numeric display'
              : 'Perfect for date-based navigation, process steps, or any custom sequence'
            }
          </Text>
        </div>
      </div>
    </div>
  );
};