import * as React from 'react';
import type { InputProps, JSXElement, SwitchOnChangeData } from '@fluentui/react-components';
import { makeStyles, useId, Input, Label, Select, Switch, tokens } from '@fluentui/react-components';
import {CalendarLtrRegular, ChevronDownRegular} from '@fluentui/react-icons';
import { VisualRefreshProvider } from '../provider';
import {ComponentStatesTable, type ComponentState} from '../ComponentStatesTable';

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
  table: {
    borderCollapse: 'collapse',
    minWidth: '720px',
    pointerEvents: 'none',
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
  },
  headerCell: {
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
    color: tokens.colorNeutralForeground2,
    fontWeight: tokens.fontWeightRegular,
    opacity: '0.8',
    padding: '0.75rem',
    textAlign: 'left',
  },
  componentCell: {
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
    fontWeight: tokens.fontWeightSemibold,
    padding: '0.75rem',
    verticalAlign: 'top',
    width: '160px',
  },
  variantCell: {
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
    padding: '0.75rem',
    verticalAlign: 'top',
    width: '180px',
  },
  stateCell: {
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
    padding: '0.75rem',
    textAlign: 'center',
    width: '140px',
  },
  stateContent: {
    display: 'flex',
    justifyContent: 'start',
  },
});

const inputVariants: Array<{ label: string; appearance?: InputProps['appearance']; content: string }> = [
  { label: 'Outline', appearance: 'outline', content: 'Outline' },
  // { label: 'Underline', appearance: 'underline', content: 'Underline' },
  // { label: 'Filled Lighter', appearance: 'filled-lighter', content: 'Filled Lighter' },
  // { label: 'Transparent', appearance: 'filled-darker', content: 'Transparent' },
];

// TODO" focus?
const componentStateOrder: ComponentState[] = ['rest', 'hover', 'pressed', 'error', 'disabled'];
const componentStateLabels: Partial<Record<ComponentState, string>> = {
  rest: 'Rest',
  hover: 'Hover',
  pressed: 'Pressed',
  error: 'Error',
  disabled: 'Disabled',
};



const InputStateCell = ({ appearance, state, size, isVisualRefreshEnabled }: {
  appearance?: InputProps['appearance'];
  state: ComponentState;
  size: InputProps['size'];
  isVisualRefreshEnabled: boolean;
}) => {
return (
  <Input
   appearance={appearance}
    disabled={state === 'disabled'}
    size={size}
    contentBefore={<CalendarLtrRegular/>}
    contentAfter={<ChevronDownRegular/>}
  />
);
};

export const InputVisualRefresh = (): JSXElement => {
  const styles = useStoryStyles();
  const switchId = useId('visual-refresh-toggle');
  const sizeSelectId = useId('visual-refresh-size');
  const [isVisualRefreshEnabled, setIsVisualRefreshEnabled] = React.useState(false);
  const [controlSize, setControlSize] = React.useState<InputProps['size']>('medium');

  const handleThemeChange = (_event: React.ChangeEvent<HTMLInputElement>, data: SwitchOnChangeData) => {
    setIsVisualRefreshEnabled(Boolean(data.checked));
  };

  const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setControlSize(event.target.value as InputProps['size']);
  };

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
          <Input size={controlSize}
          // input={{ "aria-invalid": true }}
          ></Input>
        </div>
      </div>
      {isVisualRefreshEnabled && (
       <ComponentStatesTable
       controlSize={controlSize}
       isVisualRefreshEnabled={isVisualRefreshEnabled}
       componentStateOrder={componentStateOrder}
        componentStateLabels={componentStateLabels}
        componentVariants={inputVariants}
        StateCell={InputStateCell} />
      )}
    </div>
  );

  return isVisualRefreshEnabled ? <VisualRefreshProvider>{content}</VisualRefreshProvider> : content;
};

InputVisualRefresh.parameters = {
  docs: {
    description: {
      story: 'Input.',
    },
  },
};
