import { CarouselNav, CarouselNavImageButton, CarouselNavButton } from '@fluentui/react-components';
import { Field, makeStyles, Switch, tokens, Text } from '@fluentui/react-components';
import * as React from 'react';

const SWAP_IMAGE = 'https://fabricweb.azureedge.net/fabric-website/assets/images/wireframe/image-square.png';

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

export const AppearanceVariations = () => {
  const classes = useClasses();
  const [currentIndex, setCurrentIndex] = React.useState(2);
  const [appearance, setAppearance] = React.useState<'brand' | 'subtle' | 'transparent'>('brand');

  return (
    <div className={classes.container}>
      <div className={classes.controls}>
        <Field>
          <Text weight="semibold">Appearance</Text>
          <select 
            value={appearance} 
            onChange={(e) => setAppearance(e.target.value as 'brand' | 'subtle' | 'transparent')}
            style={{ padding: '8px', borderRadius: '4px' }}
          >
            <option value="brand">Brand</option>
            <option value="subtle">Subtle</option>
            <option value="transparent">Transparent</option>
          </select>
        </Field>
      </div>

      <div className={classes.card}>
        <Text size={500} weight="semibold" className={classes.title}>
          Appearance Variations
        </Text>
        
        <CarouselNav
          mode="numbers"
          totalSlides={5}
          currentIndex={currentIndex}
          onNavigate={setCurrentIndex}
          appearance={appearance}
        />

        <Text size={200} className={classes.description}>
          Try different appearance styles: brand (default), subtle, and transparent
        </Text>
      </div>
    </div>
  );
};

export const BackwardCompatibility = () => {
  const classes = useClasses();
  const [useImageButtons, setUseImageButtons] = React.useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.controls}>
        <Field>
          <Switch 
            checked={useImageButtons} 
            onChange={(_, data) => setUseImageButtons(data.checked)}
            label={useImageButtons ? 'Using CarouselNavImageButton' : 'Using CarouselNavButton'} 
          />
        </Field>
      </div>

      <div className={classes.card}>
        <Text size={500} weight="semibold" className={classes.title}>
          Legacy API (Render Props)
        </Text>
        
        <CarouselNav totalSlides={5} appearance="brand">
          {index =>
            useImageButtons ? (
              <CarouselNavImageButton 
                image={{ src: SWAP_IMAGE }} 
                aria-label={`Carousel Nav Button ${index + 1}`} 
              />
            ) : (
              <CarouselNavButton aria-label={`Carousel Nav Button ${index + 1}`} />
            )
          }
        </CarouselNav>

        <Text size={200} className={classes.description}>
          Legacy render-prop API remains fully functional for existing implementations
        </Text>
      </div>
    </div>
  );
};