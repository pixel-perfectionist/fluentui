import * as React from 'react';
import type { JSXElement } from '@fluentui/react-components';
import { Button, Label, Select, Switch, makeStyles, useId } from '@fluentui/react-components';
import type { ButtonProps, SwitchOnChangeData } from '@fluentui/react-components';
import { tokens } from '@fluentui/react-theme';
import { shorthands } from '@griffel/react';

import {
  getVisualRefreshAppearanceStateTokens,
  type VisualRefreshAppearanceStateTokens,
} from '../../../../react-button/library/src/components/Button/useButtonStyles.styles';
import { bundleIcon, ChatEmptyFilled, ChatEmptyRegular } from '@fluentui/react-icons';
import { VisualRefreshProvider } from '../provider';
import {ComponentStatesTable, type ComponentState } from '../ComponentStatesTable';

type AppearanceStateKey = keyof VisualRefreshAppearanceStateTokens['foreground'];

const componentStateOrder: ComponentState[] = ['rest', 'hover', 'pressed', 'focus', 'disabled'];
const componentStateLabels: Partial<Record<ComponentState, string>> = {
  rest: 'Rest',
  hover: 'Hover',
  pressed: 'Pressed',
  focus: 'Focus',
  disabled: 'Disabled',
};

const componentStateToAppearanceStateKey: Partial<Record<ComponentState, AppearanceStateKey>> = {
  rest: 'rest',
  hover: 'hover',
  pressed: 'pressed',
  focus: 'hover',
  disabled: 'disabled',
};
const buttonVariants: Array<{ label: string; appearance?: ButtonProps['appearance']; content: string }> = [
  { label: 'Primary', appearance: 'primary', content: 'Primary' },
  { label: 'Outline', appearance: 'outline', content: 'Outline' },
  { label: 'Subtle', appearance: 'subtle', content: 'Subtle' },
  { label: 'Transparent', appearance: 'transparent', content: 'Transparent' },
  // { label: 'Tint', appearance: 'secondary', content: 'Tint' },
];

const useStoryStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    maxWidth: 'max-content',
    backgroundColor: 'white',
    padding: '24px',
    margin: '-48px -24px',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    flexWrap: 'wrap',
  },
  select: {
    width: '200px',
  },
  controlItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  previewSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    paddingBottom: '1.5rem',
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
  },
  previewLabel: {
    color: tokens.colorNeutralForeground2,
    fontWeight: tokens.fontWeightSemibold,
  },
  previewContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '34px',
    flexWrap: 'wrap',
  }
});

const useButtonStateStyles = makeStyles({
  focus: {
    ...shorthands.borderColor(tokens.colorStrokeFocus2),
    boxShadow: `0 0 0 ${tokens.strokeWidthThin} ${tokens.colorStrokeFocus2} inset`,
    outline: `${tokens.strokeWidthThick} solid ${tokens.colorTransparentStroke}`,
    outlineOffset: '2px',
  },
});

const ButtonStateCell = ({
  appearance,
  state,
  children,
  size,
  isVisualRefreshEnabled,
}: {
  appearance?: ButtonProps['appearance'];
  state: ComponentState;
  children: React.ReactNode;
  size: ButtonProps['size'];
  isVisualRefreshEnabled: boolean;
}) => {
  const buttonStateClasses = useButtonStateStyles();
  const focusClass = state === 'focus' ? buttonStateClasses.focus : undefined;
  const visualRefreshState = React.useMemo(() => {
    if (!isVisualRefreshEnabled) {
      return {
        style: undefined,
        iconVariant: undefined,
        iconColor: undefined,
      };
    }
    const tokens = getVisualRefreshAppearanceStateTokens(appearance ?? 'secondary');
    const stateKey = componentStateToAppearanceStateKey[state] || 'rest';
    const style: React.CSSProperties = {
      color: tokens.foreground[stateKey],
      backgroundColor: tokens.background[stateKey],
      borderColor: tokens.border[stateKey],
    };
    if (state === 'hover') {
      style.cursor = 'pointer';
    }
    return {
      style,
      iconVariant: tokens.icon.variant[stateKey],
      iconColor: tokens.icon.color[stateKey],
    };
  }, [appearance, isVisualRefreshEnabled, state]);

  const visualRefreshStyle = visualRefreshState.style;
  const visualRefreshIconVariant = visualRefreshState.iconVariant;
  const visualRefreshIconColor = visualRefreshState.iconColor;

  const ChatEmpty = bundleIcon(ChatEmptyFilled, ChatEmptyRegular);
  const chatIconFilled = isVisualRefreshEnabled ? visualRefreshIconVariant === 'filled' : undefined;
  const chatIconStyle =
    isVisualRefreshEnabled && visualRefreshIconColor ? { color: visualRefreshIconColor } : undefined;

  return (
    <Button
      appearance={appearance}
      disabled={state === 'disabled'}
      className={focusClass}
      size={size}
      style={visualRefreshStyle}
      tabIndex={-1}
      icon={<ChatEmpty filled={chatIconFilled} style={chatIconStyle} />}
    >
      {children}
    </Button>
  );
};

export const ButtonVisualRefresh = (): JSXElement => {
  const styles = useStoryStyles();
  const switchId = useId('visual-refresh-toggle');
  const sizeSelectId = useId('visual-refresh-size');
  const [isVisualRefreshEnabled, setIsVisualRefreshEnabled] = React.useState(false);
  const [controlSize, setControlSize] = React.useState<ButtonProps['size']>('medium');

  const handleThemeChange = (_event: React.ChangeEvent<HTMLInputElement>, data: SwitchOnChangeData) => {
    setIsVisualRefreshEnabled(Boolean(data.checked));
  };

  const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setControlSize(event.target.value as ButtonProps['size']);
  };

  const ChatEmpty = bundleIcon(ChatEmptyFilled, ChatEmptyRegular);

  const content = (
    <div className={styles.container}>
      <div className={styles.controls}>
        <div className={styles.controlItem}>
          <Switch
            id={switchId}
            checked={isVisualRefreshEnabled}
            onChange={handleThemeChange}
            label="Visual refresh theme"
          />
        </div>
        <div className={styles.controlItem}>
          <Label htmlFor={sizeSelectId}>Control size</Label>
          <Select id={sizeSelectId} value={controlSize} onChange={handleSizeChange} className={styles.select}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </Select>
        </div>
      </div>
      <div className={styles.previewSection}>
        <Label className={styles.previewLabel}>Preview</Label>
        <div className={styles.previewContent}>
          {buttonVariants.map(variant => (
            <Button key={variant.label} appearance={variant.appearance} size={controlSize} icon={<ChatEmpty />}>
              {variant.content}
            </Button>
          ))}
        </div>
      </div>
      {isVisualRefreshEnabled && (
        <ComponentStatesTable
          isVisualRefreshEnabled={isVisualRefreshEnabled}
          componentStateOrder={componentStateOrder}
          componentStateLabels={componentStateLabels}
          componentVariants={buttonVariants}
          controlSize={controlSize}
          StateCell={ButtonStateCell}
        />
      )}
    </div>
  );

  return isVisualRefreshEnabled ? <VisualRefreshProvider>{content}</VisualRefreshProvider> : content;
};

ButtonVisualRefresh.parameters = {
  docs: {
    description: {
      story: 'Compare Button variants across interaction states with and without the visual refresh theme.',
    },
  },
};
