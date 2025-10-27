import * as React from 'react';
import {
  sanitizeTokenName,
  TEAMS_VISUAL_REFRESH_THEME,
  TEAMS_VISUAL_REFRESH_TOKENS,
  VisualRefreshContext,
} from '@fluentui/visual-refresh-preview';

export const VisualRefreshProvider = ({ children }: { children: React.ReactNode }) => {
  const customProperties: Record<string, string> = {};
  for (const [key, value] of Object.entries(TEAMS_VISUAL_REFRESH_TOKENS ?? {})) {
    customProperties[`--visual-refresh-${key}`] = value;
  }
  for (const [key, value] of Object.entries(TEAMS_VISUAL_REFRESH_THEME)) {
    customProperties[`--${sanitizeTokenName(key)}`] = String(value);
  }
  return (
    <VisualRefreshContext.Provider value={true}>
      <div style={customProperties as React.CSSProperties}>{children}</div>
    </VisualRefreshContext.Provider>
  );
};
