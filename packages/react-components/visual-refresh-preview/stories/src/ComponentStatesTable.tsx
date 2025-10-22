import * as React from 'react';
import { Label, makeStyles, tokens } from '@fluentui/react-components';

export type ComponentState = 'rest' | 'hover' | 'pressed' | 'error' | 'focus' | 'disabled';

const useTableStyles = makeStyles({
  previewLabel: {
      color: tokens.colorNeutralForeground2,
      fontWeight: tokens.fontWeightSemibold,
    },
  table: {
    borderCollapse: 'collapse',
    minWidth: '720px',
    pointerEvents: 'none',
  },
  headerCell: {
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
    color: tokens.colorNeutralForeground2,
    fontWeight: tokens.fontWeightRegular,
    opacity: '0.8',
    padding: '0.75rem',
    textAlign: 'left',
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

export const ComponentStatesTable = ({
  isVisualRefreshEnabled,
  componentStateOrder,
  componentStateLabels,
  componentVariants,
  controlSize,
  StateCell,
}: {
  isVisualRefreshEnabled: boolean;
  componentStateOrder: ComponentState[];
  componentStateLabels: Partial<Record<ComponentState, string>>;
  componentVariants: Array<{ label: string; appearance?: string; content: string }>;
  controlSize?: 'small' | 'medium' | 'large';
  StateCell: React.ComponentType<any>;
}) => {
  const styles = useTableStyles();

  return (
    <div>
      <Label className={styles.previewLabel}>States</Label>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.headerCell}>State</th>
            {componentVariants.map(variant => (
              <th key={variant.label} className={styles.headerCell}>
                {variant.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {componentStateOrder.map((state, stateIndex) => (
            <tr key={state}>
              <td className={styles.variantCell}>{componentStateLabels[state]}</td>
              {componentVariants.map(variant => (
                <td key={variant.label} className={styles.stateCell}>
                <div className={styles.stateContent}>
                  <StateCell
                    appearance={variant.appearance}
                    state={state}
                    size={controlSize}
                    isVisualRefreshEnabled={isVisualRefreshEnabled}
                  >
                    {state === 'disabled' ? 'Disabled' : variant.content}
                  </StateCell>
                </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
