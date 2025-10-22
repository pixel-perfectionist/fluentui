import { tokens } from '@fluentui/tokens';

export type GroupFallbacks = {
  [key: string]: {
    [key: string]: {
      fluent?: string | null;
      visualRefresh?: string | null;
      generic?: string | null;
      primitive?: string | null;
    };
  };
};

export const groupFallbacks: GroupFallbacks = {
  button: {
    groupButtonTextFontfamily: {
      fluent: tokens.fontFamilyBase,
      visualRefresh: tokens.fontFamilyBase,
    },
    groupButtonNeutralBackground: {
      fluent: tokens.colorNeutralBackground1,
      visualRefresh: tokens.colorNeutralBackground1,
    },
    groupButtonNeutralBackgroundHover: {
      fluent: tokens.colorNeutralBackground1Hover,
      visualRefresh: tokens.colorNeutralBackground1Hover,
    },
    groupButtonNeutralBackgroundPressed: {
      fluent: tokens.colorNeutralBackground1Pressed,
      visualRefresh: tokens.colorNeutralBackground1Pressed,
    },
    groupButtonNeutralBackgroundSelected: {
      fluent: tokens.colorNeutralBackground1Selected,
      visualRefresh: tokens.colorNeutralBackground1Selected,
    },
    groupButtonNeutralBackgroundHoverSelected: {
      fluent: tokens.colorNeutralBackground1Hover,
      visualRefresh: tokens.colorNeutralBackground1Hover,
    },
    groupButtonNeutralBackgroundPressedSelected: {
      fluent: tokens.colorNeutralBackground1Pressed,
      visualRefresh: tokens.colorNeutralBackground1Pressed,
    },
    groupButtonNeutralBackgroundDisabled: {
      fluent: tokens.colorNeutralBackgroundDisabled,
      visualRefresh: tokens.colorNeutralBackgroundDisabled,
    },
    groupButtonPrimaryBackground: {
      fluent: tokens.colorBrandBackground,
      visualRefresh: 'red',
    },
    groupButtonPrimaryBackgroundHover: {
      fluent: tokens.colorBrandBackgroundHover,
      visualRefresh: tokens.colorBrandBackgroundHover,
    },
    groupButtonPrimaryBackgroundPressed: {
      fluent: tokens.colorBrandBackgroundPressed,
      visualRefresh: tokens.colorBrandBackgroundPressed,
    },
    groupButtonPrimaryBackgroundSelected: {
      fluent: tokens.colorBrandBackgroundSelected,
      visualRefresh: tokens.colorBrandBackgroundSelected,
    },
    groupButtonPrimaryBackgroundHoverSelected: {
      fluent: tokens.colorBrandBackgroundHover,
      visualRefresh: tokens.colorBrandBackgroundHover,
    },
    groupButtonPrimaryBackgroundPressedSelected: {
      fluent: tokens.colorBrandBackgroundPressed,
      visualRefresh: tokens.colorBrandBackgroundPressed,
    },
    groupButtonPrimaryBackgroundDisabled: {
      fluent: tokens.colorNeutralBackgroundDisabled,
      visualRefresh: tokens.colorNeutralBackgroundDisabled,
    },
    groupButtonOutlineBackground: {
      fluent: tokens.colorTransparentBackground,
      visualRefresh: tokens.colorTransparentBackground,
    },
    groupButtonOutlineBackgroundHover: {
      fluent: tokens.colorTransparentBackgroundHover,
      visualRefresh: tokens.colorTransparentBackgroundHover,
    },
    groupButtonOutlineBackgroundPressed: {
      fluent: tokens.colorTransparentBackgroundPressed,
      visualRefresh: tokens.colorTransparentBackgroundPressed,
    },
    groupButtonOutlineBackgroundSelected: {
      fluent: tokens.colorTransparentBackgroundSelected,
      visualRefresh: tokens.colorTransparentBackgroundSelected,
    },
    groupButtonOutlineBackgroundHoverSelected: {
      fluent: tokens.colorTransparentBackgroundHover,
      visualRefresh: tokens.colorTransparentBackgroundHover,
    },
    groupButtonOutlineBackgroundPressedSelected: {
      fluent: tokens.colorTransparentBackgroundPressed,
      visualRefresh: tokens.colorTransparentBackgroundPressed,
    },
    groupButtonOutlineBackgroundDisabled: {
      fluent: tokens.colorTransparentBackground,
      visualRefresh: tokens.colorTransparentBackground,
    },
    groupButtonSubtleBackground: {
      fluent: tokens.colorSubtleBackground,
      visualRefresh: tokens.colorSubtleBackground,
    },
    groupButtonSubtleBackgroundHover: {
      fluent: tokens.colorSubtleBackgroundHover,
      visualRefresh: tokens.colorSubtleBackgroundHover,
    },
    groupButtonSubtleBackgroundPressed: {
      fluent: tokens.colorSubtleBackgroundPressed,
      visualRefresh: tokens.colorSubtleBackgroundPressed,
    },
    groupButtonSubtleBackgroundSelected: {
      fluent: tokens.colorSubtleBackgroundSelected,
      visualRefresh: tokens.colorSubtleBackgroundSelected,
    },
    groupButtonSubtleBackgroundHoverSelected: {
      fluent: tokens.colorSubtleBackgroundHover,
      visualRefresh: tokens.colorSubtleBackgroundHover,
    },
    groupButtonSubtleBackgroundPressedSelected: {
      fluent: tokens.colorSubtleBackgroundPressed,
      visualRefresh: tokens.colorSubtleBackgroundPressed,
    },
    groupButtonSubtleBackgroundDisabled: {
      fluent: tokens.colorTransparentBackground,
      visualRefresh: tokens.colorTransparentBackground,
    },
    groupButtonTransparentBackground: {
      fluent: tokens.colorTransparentBackground,
      visualRefresh: tokens.colorTransparentBackground,
    },
    groupButtonTransparentBackgroundHover: {
      fluent: tokens.colorTransparentBackgroundHover,
      visualRefresh: tokens.colorTransparentBackgroundHover,
    },
    groupButtonTransparentBackgroundPressed: {
      fluent: tokens.colorTransparentBackgroundPressed,
      visualRefresh: tokens.colorTransparentBackgroundPressed,
    },
    groupButtonTransparentBackgroundSelected: {
      fluent: tokens.colorTransparentBackgroundSelected,
      visualRefresh: tokens.colorTransparentBackgroundSelected,
    },
    groupButtonTransparentBackgroundHoverSelected: {
      fluent: tokens.colorTransparentBackgroundHover,
      visualRefresh: tokens.colorTransparentBackgroundHover,
    },
    groupButtonTransparentBackgroundPressedSelected: {
      fluent: tokens.colorTransparentBackgroundPressed,
      visualRefresh: tokens.colorTransparentBackgroundPressed,
    },
    groupButtonTransparentBackgroundDisabled: {
      fluent: tokens.colorTransparentBackground,
      visualRefresh: tokens.colorTransparentBackground,
    },
    groupButtonNeutralStroke: {
      fluent: tokens.colorNeutralStroke1,
      visualRefresh: tokens.colorNeutralStroke1,
    },
    groupButtonNeutralStrokeHover: {
      fluent: tokens.colorNeutralStroke1Hover,
      visualRefresh: tokens.colorNeutralStroke1Hover,
    },
    groupButtonNeutralStrokePressed: {
      fluent: tokens.colorNeutralStroke1Pressed,
      visualRefresh: tokens.colorNeutralStroke1Pressed,
    },
    groupButtonNeutralStrokeSelected: {
      fluent: tokens.colorNeutralStroke1Selected,
      visualRefresh: tokens.colorNeutralStroke1Selected,
    },
    groupButtonNeutralStrokeHoverSelected: {
      fluent: tokens.colorNeutralStroke1Hover,
      visualRefresh: tokens.colorNeutralStroke1Hover,
    },
    groupButtonNeutralStrokePressedSelected: {
      fluent: tokens.colorNeutralStroke1Pressed,
      visualRefresh: tokens.colorNeutralStroke1Pressed,
    },
    groupButtonNeutralStrokeDisabled: {
      fluent: tokens.colorNeutralStrokeDisabled,
      visualRefresh: tokens.colorNeutralStrokeDisabled,
    },
    groupButtonPrimaryStroke: {
      fluent: 'transparent',
      visualRefresh: 'transparent',
    },
    groupButtonPrimaryStrokeHover: {
      fluent: 'transparent',
      visualRefresh: 'transparent',
    },
    groupButtonPrimaryStrokePressed: {
      fluent: 'transparent',
      visualRefresh: 'transparent',
    },
    groupButtonPrimaryStrokeSelected: {
      fluent: 'transparent',
      visualRefresh: 'transparent',
    },
    groupButtonPrimaryStrokeHoverSelected: {
      fluent: 'transparent',
      visualRefresh: 'transparent',
    },
    groupButtonPrimaryStrokePressedSelected: {
      fluent: 'transparent',
      visualRefresh: 'transparent',
    },
    groupButtonPrimaryStrokeDisabled: {
      fluent: 'transparent',
      visualRefresh: 'transparent',
    },
    groupButtonOutlineStroke: {
      fluent: tokens.colorNeutralStroke1,
      visualRefresh: tokens.colorNeutralStroke1,
    },
    groupButtonOutlineStrokeHover: {
      fluent: tokens.colorNeutralStroke1Hover,
      visualRefresh: tokens.colorNeutralStroke1Hover,
    },
    groupButtonOutlineStrokePressed: {
      fluent: tokens.colorNeutralStroke1Pressed,
      visualRefresh: tokens.colorNeutralStroke1Pressed,
    },
    groupButtonOutlineStrokeSelected: {
      fluent: tokens.colorNeutralStroke1,
      visualRefresh: tokens.colorNeutralStroke1,
    },
    groupButtonOutlineStrokeHoverSelected: {
      fluent: tokens.colorNeutralStroke1Selected,
      visualRefresh: tokens.colorNeutralStroke1Selected,
    },
    groupButtonOutlineStrokePressedSelected: {
      fluent: tokens.colorNeutralStroke1Selected,
      visualRefresh: tokens.colorNeutralStroke1Selected,
    },
    groupButtonOutlineStrokeDisabled: {
      fluent: tokens.colorNeutralStrokeDisabled,
      visualRefresh: tokens.colorNeutralStrokeDisabled,
    },
    groupButtonSubtleStroke: {
      fluent: 'transparent',
      visualRefresh: 'transparent',
    },
    groupButtonSubtleStrokeHover: {
      fluent: 'transparent',
      visualRefresh: 'transparent',
    },
    groupButtonSubtleStrokePressed: {
      fluent: 'transparent',
      visualRefresh: 'transparent',
    },
    groupButtonSubtleStrokeSelected: {
      fluent: 'transparent',
      visualRefresh: 'transparent',
    },
    groupButtonSubtleStrokeHoverSelected: {
      fluent: 'transparent',
      visualRefresh: 'transparent',
    },
    groupButtonSubtleStrokePressedSelected: {
      fluent: 'transparent',
      visualRefresh: 'transparent',
    },
    groupButtonSubtleStrokeDisabled: {
      fluent: 'transparent',
      visualRefresh: 'transparent',
    },
    groupButtonTransparentStroke: {
      fluent: 'transparent',
      visualRefresh: 'transparent',
    },
    groupButtonTransparentStrokeHover: {
      fluent: 'transparent',
      visualRefresh: 'transparent',
    },
    groupButtonTransparentStrokePressed: {
      fluent: 'transparent',
      visualRefresh: 'transparent',
    },
    groupButtonTransparentStrokeSelected: {
      fluent: 'transparent',
      visualRefresh: 'transparent',
    },
    groupButtonTransparentStrokeHoverSelected: {
      fluent: 'transparent',
      visualRefresh: 'transparent',
    },
    groupButtonTransparentStrokePressedSelected: {
      fluent: 'transparent',
      visualRefresh: 'transparent',
    },
    groupButtonTransparentStrokeDisabled: {
      fluent: 'transparent',
      visualRefresh: 'transparent',
    },
    groupButtonSmallTextFontsize: {
      fluent: tokens.fontSizeBase200,
      visualRefresh: tokens.fontSizeBase200,
    },
    groupButtonSmallTextLineheight: {
      fluent: tokens.lineHeightBase200,
      visualRefresh: tokens.lineHeightBase200,
    },
    groupButtonSmallPaddingHorizontal: {
      fluent: tokens.spacingHorizontalS,
      visualRefresh: tokens.spacingHorizontalS,
    },
    groupButtonSmallPaddingTop: {
      fluent: '3px',
      visualRefresh: '3px',
    },
    groupButtonSmallPaddingBottom: {
      fluent: '3px',
      visualRefresh: '3px',
    },
    groupButtonMediumTextPaddingHorizontal: {
      fluent: '0px',
      visualRefresh: '0px',
    },
    groupButtonLargeTextPaddingHorizontal: {
      fluent: '0px',
      visualRefresh: '0px',
    },
    groupButtonSmallTextPaddingHorizontal: {
      fluent: '0px',
      visualRefresh: '0px',
    },
    groupButtonSmallGap: {
      fluent: tokens.spacingHorizontalXS,
      visualRefresh: tokens.spacingHorizontalXS,
    },
    groupButtonSmallCorner: {
      fluent: tokens.borderRadiusMedium,
      visualRefresh: tokens.borderRadiusMedium,
    },
    groupButtonSmallCornerHover: {
      fluent: tokens.borderRadiusMedium,
      visualRefresh: tokens.borderRadiusMedium,
    },
    groupButtonSmallCornerPressed: {
      fluent: tokens.borderRadiusMedium,
      visualRefresh: tokens.borderRadiusMedium,
    },
    groupButtonSmallCornerDisabled: {
      fluent: tokens.borderRadiusMedium,
      visualRefresh: tokens.borderRadiusMedium,
    },
    groupButtonSmallCornerHoverSelected: {
      fluent: tokens.borderRadiusMedium,
      visualRefresh: tokens.borderRadiusMedium,
    },
    groupButtonSmallCornerPressedSelected: {
      fluent: tokens.borderRadiusMedium,
      visualRefresh: tokens.borderRadiusMedium,
    },
    groupButtonSmallCornerSelected: {
      fluent: tokens.borderRadiusMedium,
      visualRefresh: tokens.borderRadiusMedium,
    },
    groupButtonSmallMinwidth: {
      fluent: '64px',
      visualRefresh: '64px',
    },
    groupButtonStrokewidth: {
      fluent: tokens.strokeWidthThin,
      visualRefresh: tokens.strokeWidthThin,
    },
    groupButtonSmallTextFontweight: {
      fluent: tokens.fontWeightRegular,
      visualRefresh: tokens.fontWeightRegular,
    },
    groupButtonMediumTextFontsize: {
      fluent: tokens.fontSizeBase300,
      visualRefresh: tokens.fontSizeBase300,
    },
    groupButtonMediumTextLineheight: {
      fluent: tokens.lineHeightBase300,
      visualRefresh: tokens.lineHeightBase300,
    },
    groupButtonMediumPaddingHorizontal: {
      fluent: tokens.spacingHorizontalM,
      visualRefresh: tokens.spacingHorizontalM,
    },
    groupButtonMediumPaddingTop: {
      fluent: '5px',
      visualRefresh: '5px',
    },
    groupButtonMediumPaddingBottom: {
      fluent: '5px',
      visualRefresh: '5px',
    },
    groupButtonMediumGap: {
      fluent: tokens.spacingHorizontalSNudge,
      visualRefresh: tokens.spacingHorizontalSNudge,
    },
    groupButtonMediumCorner: {
      fluent: tokens.borderRadiusMedium,
      visualRefresh: tokens.borderRadiusMedium,
    },
    groupButtonMediumCornerPressed: {
      fluent: tokens.borderRadiusMedium,
      visualRefresh: tokens.borderRadiusMedium,
    },
    groupButtonMediumCornerPressedSelected: {
      fluent: tokens.borderRadiusMedium,
      visualRefresh: tokens.borderRadiusMedium,
    },
    groupButtonMediumCornerHover: {
      fluent: tokens.borderRadiusMedium,
      visualRefresh: tokens.borderRadiusMedium,
    },
    groupButtonMediumCornerHoverSelected: {
      fluent: tokens.borderRadiusMedium,
      visualRefresh: tokens.borderRadiusMedium,
    },
    groupButtonMediumCornerDisabled: {
      fluent: tokens.borderRadiusMedium,
      visualRefresh: tokens.borderRadiusMedium,
    },
    groupButtonMediumCornerSelected: {
      fluent: tokens.borderRadiusMedium,
      visualRefresh: tokens.borderRadiusMedium,
    },
    groupButtonMediumMinwidth: {
      fluent: '96px',
      visualRefresh: '96px',
    },
    groupButtonMediumTextFontweight: {
      fluent: tokens.fontWeightSemibold,
      visualRefresh: tokens.fontWeightSemibold,
    },
    groupButtonLargeTextFontsize: {
      fluent: tokens.fontSizeBase400,
      visualRefresh: tokens.fontSizeBase400,
    },
    groupButtonLargeTextLineheight: {
      fluent: tokens.lineHeightBase400,
      visualRefresh: tokens.lineHeightBase400,
    },
    groupButtonLargePaddingHorizontal: {
      fluent: tokens.spacingHorizontalL,
      visualRefresh: tokens.spacingHorizontalL,
    },
    groupButtonLargePaddingTop: {
      fluent: tokens.spacingVerticalS,
      visualRefresh: tokens.spacingVerticalS,
    },
    groupButtonLargePaddingBottom: {
      fluent: tokens.spacingVerticalS,
      visualRefresh: tokens.spacingVerticalS,
    },
    groupButtonLargeGap: {
      fluent: tokens.spacingHorizontalSNudge,
      visualRefresh: tokens.spacingHorizontalSNudge,
    },
    groupButtonLargeCorner: {
      fluent: tokens.borderRadiusMedium,
      visualRefresh: tokens.borderRadiusMedium,
    },
    groupButtonLargeCornerHover: {
      fluent: tokens.borderRadiusMedium,
      visualRefresh: tokens.borderRadiusMedium,
    },
    groupButtonLargeCornerHoverSelected: {
      fluent: tokens.borderRadiusMedium,
      visualRefresh: tokens.borderRadiusMedium,
    },
    groupButtonLargeCornerPressed: {
      fluent: tokens.borderRadiusMedium,
      visualRefresh: tokens.borderRadiusMedium,
    },
    groupButtonLargeCornerPressedSelected: {
      fluent: tokens.borderRadiusMedium,
      visualRefresh: tokens.borderRadiusMedium,
    },
    groupButtonLargeCornerSelected: {
      fluent: tokens.borderRadiusMedium,
      visualRefresh: tokens.borderRadiusMedium,
    },
    groupButtonLargeCornerDisabled: {
      fluent: tokens.borderRadiusMedium,
      visualRefresh: tokens.borderRadiusMedium,
    },
    groupButtonLargeMinwidth: {
      fluent: '96px',
      visualRefresh: '96px',
    },
    groupButtonLargeTextFontweight: {
      fluent: tokens.fontWeightSemibold,
      visualRefresh: tokens.fontWeightSemibold,
    },
    groupButtonSmallIconSize: {
      fluent: '20px',
      visualRefresh: '20px',
    },
    groupButtonMediumIconSize: {
      fluent: '20px',
      visualRefresh: '20px',
    },
    groupButtonLargeIconSize: {
      fluent: '24px',
      visualRefresh: '24px',
    },
    groupButtonNeutralTextForeground: {
      fluent: tokens.colorNeutralForeground1,
      visualRefresh: tokens.colorNeutralForeground1,
    },
    groupButtonNeutralTextForegroundHover: {
      fluent: tokens.colorNeutralForeground1Hover,
      visualRefresh: tokens.colorNeutralForeground1Hover,
    },
    groupButtonNeutralTextForegroundPressed: {
      fluent: tokens.colorNeutralForeground1Pressed,
      visualRefresh: tokens.colorNeutralForeground1Pressed,
    },
    groupButtonNeutralTextForegroundSelected: {
      fluent: tokens.colorNeutralForeground1Selected,
      visualRefresh: tokens.colorNeutralForeground1Selected,
    },
    groupButtonNeutralTextForegroundDisabled: {
      fluent: tokens.colorNeutralForegroundDisabled,
      visualRefresh: tokens.colorNeutralForegroundDisabled,
    },
    groupButtonPrimaryTextForeground: {
      fluent: tokens.colorNeutralForegroundOnBrand,
      visualRefresh: tokens.colorNeutralForegroundOnBrand,
    },
    groupButtonPrimaryTextForegroundHover: {
      fluent: tokens.colorNeutralForegroundOnBrand,
      visualRefresh: tokens.colorNeutralForegroundOnBrand,
    },
    groupButtonPrimaryTextForegroundPressed: {
      fluent: tokens.colorNeutralForegroundOnBrand,
      visualRefresh: tokens.colorNeutralForegroundOnBrand,
    },
    groupButtonPrimaryTextForegroundSelected: {
      fluent: tokens.colorNeutralForegroundOnBrand,
      visualRefresh: tokens.colorNeutralForegroundOnBrand,
    },
    groupButtonPrimaryTextForegroundDisabled: {
      fluent: tokens.colorNeutralForegroundDisabled,
      visualRefresh: tokens.colorNeutralForegroundDisabled,
    },
    groupButtonOutlineTextForeground: {
      fluent: tokens.colorNeutralForeground1,
      visualRefresh: tokens.colorNeutralForeground1,
    },
    groupButtonOutlineTextForegroundHover: {
      fluent: tokens.colorNeutralForeground1Hover,
      visualRefresh: tokens.colorNeutralForeground1Hover,
    },
    groupButtonOutlineTextForegroundPressed: {
      fluent: tokens.colorNeutralForeground1Pressed,
      visualRefresh: tokens.colorNeutralForeground1Pressed,
    },
    groupButtonOutlineTextForegroundSelected: {
      fluent: tokens.colorNeutralForeground1Selected,
      visualRefresh: tokens.colorNeutralForeground1Selected,
    },
    groupButtonOutlineTextForegroundDisabled: {
      fluent: tokens.colorNeutralForegroundDisabled,
      visualRefresh: tokens.colorNeutralForegroundDisabled,
    },
    groupButtonSubtleTextForeground: {
      fluent: tokens.colorNeutralForeground2,
      visualRefresh: tokens.colorNeutralForeground2,
    },
    groupButtonSubtleTextForegroundHover: {
      fluent: tokens.colorNeutralForeground2Hover,
      visualRefresh: tokens.colorNeutralForeground2Hover,
    },
    groupButtonSubtleTextForegroundPressed: {
      fluent: tokens.colorNeutralForeground2Pressed,
      visualRefresh: tokens.colorNeutralForeground2Pressed,
    },
    groupButtonSubtleTextForegroundSelected: {
      fluent: tokens.colorNeutralForeground2Selected,
      visualRefresh: tokens.colorNeutralForeground2Selected,
    },
    groupButtonSubtleTextForegroundDisabled: {
      fluent: tokens.colorNeutralForegroundDisabled,
      visualRefresh: tokens.colorNeutralForegroundDisabled,
    },
    groupButtonTransparentTextForeground: {
      fluent: tokens.colorNeutralForeground2,
      visualRefresh: tokens.colorNeutralForeground2,
    },
    groupButtonTransparentTextForegroundHover: {
      fluent: tokens.colorNeutralForeground2BrandHover,
      visualRefresh: tokens.colorNeutralForeground2BrandHover,
    },
    groupButtonTransparentTextForegroundPressed: {
      fluent: tokens.colorNeutralForeground2BrandPressed,
      visualRefresh: tokens.colorNeutralForeground2BrandPressed,
    },
    groupButtonTransparentTextForegroundSelected: {
      fluent: tokens.colorNeutralForeground2BrandSelected,
      visualRefresh: tokens.colorNeutralForeground2BrandSelected,
    },
    groupButtonTransparentTextForegroundDisabled: {
      fluent: tokens.colorNeutralForegroundDisabled,
      visualRefresh: tokens.colorNeutralForegroundDisabled,
    },
    groupButtonNeutralTextSecondaryForeground: {
      fluent: tokens.colorNeutralForeground2,
      visualRefresh: tokens.colorNeutralForeground2,
    },
    groupButtonNeutralTextSecondaryForegroundHover: {
      fluent: tokens.colorNeutralForeground2Hover,
      visualRefresh: tokens.colorNeutralForeground2Hover,
    },
    groupButtonNeutralTextSecondaryForegroundPressed: {
      fluent: tokens.colorNeutralForeground2Pressed,
      visualRefresh: tokens.colorNeutralForeground2Pressed,
    },
    groupButtonSmallTextSecondaryFontsize: {
      fluent: tokens.fontSizeBase200,
      visualRefresh: tokens.fontSizeBase200,
    },
    groupButtonSmallTextSecondaryLineheight: {
      fluent: '100%',
      visualRefresh: '100%',
    },
    groupButtonSmallTextSecondaryFontweight: {
      fluent: tokens.fontWeightRegular,
      visualRefresh: tokens.fontWeightRegular,
    },
    groupButtonMediumTextSecondaryFontsize: {
      fluent: tokens.fontSizeBase200,
      visualRefresh: tokens.fontSizeBase200,
    },
    groupButtonMediumTextSecondaryLineheight: {
      fluent: '100%',
      visualRefresh: '100%',
    },
    groupButtonMediumTextSecondaryFontweight: {
      fluent: tokens.fontWeightRegular,
      visualRefresh: tokens.fontWeightRegular,
    },
    groupButtonLargeTextSecondaryFontsize: {
      fluent: tokens.fontSizeBase300,
      visualRefresh: tokens.fontSizeBase300,
    },
    groupButtonLargeTextSecondaryLineheight: {
      fluent: '100%',
      visualRefresh: '100%',
    },
    groupButtonLargeTextSecondaryFontweight: {
      fluent: tokens.fontWeightRegular,
      visualRefresh: tokens.fontWeightRegular,
    },
    groupButtonNeutralTextSecondaryForegroundDisabled: {
      fluent: tokens.colorNeutralForegroundDisabled,
      visualRefresh: tokens.colorNeutralForegroundDisabled,
    },
    groupButtonPrimaryTextSecondaryForeground: {
      fluent: tokens.colorNeutralForegroundOnBrand,
      visualRefresh: tokens.colorNeutralForegroundOnBrand,
    },
    groupButtonPrimaryTextSecondaryForegroundHover: {
      fluent: tokens.colorNeutralForegroundOnBrand,
      visualRefresh: tokens.colorNeutralForegroundOnBrand,
    },
    groupButtonPrimaryTextSecondaryForegroundPressed: {
      fluent: tokens.colorNeutralForegroundOnBrand,
      visualRefresh: tokens.colorNeutralForegroundOnBrand,
    },
    groupButtonPrimaryTextSecondaryForegroundSelected: {
      fluent: null,
      visualRefresh: null,
    },
    groupButtonPrimaryTextSecondaryForegroundHoverSelected: {
      fluent: null,
      visualRefresh: null,
    },
    groupButtonPrimaryTextSecondaryForegroundPressedSelected: {
      fluent: null,
      visualRefresh: null,
    },
    groupButtonPrimaryTextSecondaryForegroundDisabled: {
      fluent: tokens.colorNeutralForegroundDisabled,
      visualRefresh: tokens.colorNeutralForegroundDisabled,
    },
    groupButtonOutlineTextSecondaryForeground: {
      fluent: tokens.colorNeutralForeground2,
      visualRefresh: tokens.colorNeutralForeground2,
    },
    groupButtonOutlineTextSecondaryForegroundHover: {
      fluent: tokens.colorNeutralForeground2Hover,
      visualRefresh: tokens.colorNeutralForeground2Hover,
    },
    groupButtonOutlineTextSecondaryForegroundPressed: {
      fluent: tokens.colorNeutralForeground2Pressed,
      visualRefresh: tokens.colorNeutralForeground2Pressed,
    },
    groupButtonOutlineTextSecondaryForegroundSelected: {
      fluent: null,
      visualRefresh: null,
    },
    groupButtonOutlineTextSecondaryForegroundHoverSelected: {
      fluent: null,
      visualRefresh: null,
    },
    groupButtonOutlineTextSecondaryForegroundPressedSelected: {
      fluent: null,
      visualRefresh: null,
    },
    groupButtonOutlineTextSecondaryForegroundDisabled: {
      fluent: tokens.colorNeutralForegroundDisabled,
      visualRefresh: tokens.colorNeutralForegroundDisabled,
    },
    groupButtonSubtleTextSecondaryForeground: {
      fluent: tokens.colorNeutralForeground2,
      visualRefresh: tokens.colorNeutralForeground2,
    },
    groupButtonSubtleTextSecondaryForegroundHover: {
      fluent: tokens.colorNeutralForeground2Hover,
      visualRefresh: tokens.colorNeutralForeground2Hover,
    },
    groupButtonSubtleTextSecondaryForegroundPressed: {
      fluent: tokens.colorNeutralForeground2Pressed,
      visualRefresh: tokens.colorNeutralForeground2Pressed,
    },
    groupButtonSubtleTextSecondaryForegroundSelected: {
      fluent: null,
      visualRefresh: null,
    },
    groupButtonSubtleTextSecondaryForegroundHoverSelected: {
      fluent: null,
      visualRefresh: null,
    },
    groupButtonSubtleTextSecondaryForegroundPressedSelected: {
      fluent: null,
      visualRefresh: null,
    },
    groupButtonSubtleTextSecondaryForegroundDisabled: {
      fluent: tokens.colorNeutralForegroundDisabled,
      visualRefresh: tokens.colorNeutralForegroundDisabled,
    },
    groupButtonTransparentTextSecondaryForeground: {
      fluent: tokens.colorNeutralForeground2,
      visualRefresh: tokens.colorNeutralForeground2,
    },
    groupButtonTransparentTextSecondaryForegroundHover: {
      fluent: tokens.colorNeutralForeground2BrandHover,
      visualRefresh: tokens.colorNeutralForeground2BrandHover,
    },
    groupButtonTransparentTextSecondaryForegroundPressed: {
      fluent: tokens.colorNeutralForeground2BrandPressed,
      visualRefresh: tokens.colorNeutralForeground2BrandPressed,
    },
    groupButtonTransparentTextSecondaryForegroundSelected: {
      fluent: null,
      visualRefresh: null,
    },
    groupButtonTransparentTextSecondaryForegroundHoverSelected: {
      fluent: null,
      visualRefresh: null,
    },
    groupButtonTransparentTextSecondaryForegroundPressedSelected: {
      fluent: null,
      visualRefresh: null,
    },
    groupButtonTransparentTextSecondaryForegroundDisabled: {
      fluent: tokens.colorNeutralForegroundDisabled,
      visualRefresh: tokens.colorNeutralForegroundDisabled,
    },
    groupButtonNeutralIconForeground: {
      fluent: tokens.colorNeutralForeground1,
      visualRefresh: tokens.colorNeutralForeground1,
    },
    groupButtonNeutralIconForegroundHover: {
      fluent: tokens.colorNeutralForeground1Hover,
      visualRefresh: tokens.colorNeutralForeground1Hover,
    },
    groupButtonNeutralIconForegroundPressed: {
      fluent: tokens.colorNeutralForeground1Pressed,
      visualRefresh: tokens.colorNeutralForeground1Pressed,
    },
    groupButtonNeutralIconForegroundDisabled: {
      fluent: tokens.colorNeutralForegroundDisabled,
      visualRefresh: tokens.colorNeutralForegroundDisabled,
    },
    groupButtonPrimaryIconForeground: {
      fluent: tokens.colorNeutralForegroundOnBrand,
      visualRefresh: tokens.colorNeutralForegroundOnBrand,
    },
    groupButtonPrimaryIconForegroundHover: {
      fluent: tokens.colorNeutralForegroundOnBrand,
      visualRefresh: tokens.colorNeutralForegroundOnBrand,
    },
    groupButtonPrimaryIconForegroundPressed: {
      fluent: tokens.colorNeutralForegroundOnBrand,
      visualRefresh: tokens.colorNeutralForegroundOnBrand,
    },
    groupButtonPrimaryIconForegroundDisabled: {
      fluent: tokens.colorNeutralForegroundDisabled,
      visualRefresh: tokens.colorNeutralForegroundDisabled,
    },
    groupButtonOutlineIconForeground: {
      fluent: tokens.colorNeutralForeground1,
      visualRefresh: tokens.colorNeutralForeground1,
    },
    groupButtonOutlineIconForegroundHover: {
      fluent: tokens.colorNeutralForeground1Hover,
      visualRefresh: tokens.colorNeutralForeground1Hover,
    },
    groupButtonOutlineIconForegroundPressed: {
      fluent: tokens.colorNeutralForeground1Pressed,
      visualRefresh: tokens.colorNeutralForeground1Pressed,
    },
    groupButtonOutlineIconForegroundDisabled: {
      fluent: tokens.colorNeutralForegroundDisabled,
      visualRefresh: tokens.colorNeutralForegroundDisabled,
    },
    groupButtonSubtleIconForeground: {
      fluent: tokens.colorNeutralForeground2,
      visualRefresh: tokens.colorNeutralForeground2,
    },
    groupButtonSubtleIconForegroundHover: {
      fluent: tokens.colorNeutralForeground2BrandHover,
      visualRefresh: tokens.colorNeutralForeground2BrandHover,
    },
    groupButtonSubtleIconForegroundPressed: {
      fluent: tokens.colorNeutralForeground2BrandPressed,
      visualRefresh: tokens.colorNeutralForeground2BrandPressed,
    },
    groupButtonSubtleIconForegroundDisabled: {
      fluent: tokens.colorNeutralForegroundDisabled,
      visualRefresh: tokens.colorNeutralForegroundDisabled,
    },
    groupButtonTransparentIconForeground: {
      fluent: tokens.colorNeutralForeground2,
      visualRefresh: tokens.colorNeutralForeground2,
    },
    groupButtonTransparentIconForegroundHover: {
      fluent: tokens.colorNeutralForeground2BrandHover,
      visualRefresh: tokens.colorNeutralForeground2BrandHover,
    },
    groupButtonTransparentIconForegroundPressed: {
      fluent: tokens.colorNeutralForeground2BrandPressed,
      visualRefresh: tokens.colorNeutralForeground2BrandPressed,
    },
    groupButtonTransparentIconForegroundDisabled: {
      fluent: tokens.colorNeutralForegroundDisabled,
      visualRefresh: tokens.colorNeutralForegroundDisabled,
    },
    groupButtonOutlineStrokewidthHover: {
      fluent: tokens.strokeWidthThin,
      visualRefresh: tokens.strokeWidthThin,
    },
    groupButtonOutlineStrokewidthPressed: {
      fluent: tokens.strokeWidthThin,
      visualRefresh: tokens.strokeWidthThin,
    },
    groupButtonOutlineStrokewidthSelected: {
      fluent: tokens.strokeWidthThicker,
      visualRefresh: tokens.strokeWidthThicker,
    },
    groupButtonSmallIcononlyPadding: {
      fluent: '1px',
      visualRefresh: '1px',
    },
    groupButtonMediumIcononlyPadding: {
      fluent: '5px',
      visualRefresh: '5px',
    },
    groupButtonLargeIcononlyPadding: {
      fluent: '7px',
      visualRefresh: '7px',
    },
    groupButtonSubtleIconForegroundSelected: {
      fluent: tokens.colorNeutralForeground2BrandSelected,
      visualRefresh: tokens.colorNeutralForeground2BrandSelected,
    },
    groupButtonPrimaryIconForegroundSelected: {
      fluent: tokens.colorNeutralForegroundOnBrand,
      visualRefresh: tokens.colorNeutralForegroundOnBrand,
    },
    groupButtonOutlineIconForegroundSelected: {
      fluent: tokens.colorNeutralForeground1Selected,
      visualRefresh: tokens.colorNeutralForeground1Selected,
    },
    groupButtonNeutralIconForegroundSelected: {
      fluent: tokens.colorNeutralForeground1Selected,
      visualRefresh: tokens.colorNeutralForeground1Selected,
    },
    groupButtonTransparentIconForegroundSelected: {
      fluent: tokens.colorNeutralForeground2BrandSelected,
      visualRefresh: tokens.colorNeutralForeground2BrandSelected,
    },
    groupButtonDividerStrokewidth: {
      fluent: tokens.strokeWidthThin,
      visualRefresh: tokens.strokeWidthThin,
    },
    groupButtonOutlineDividerForeground: {
      fluent: tokens.colorNeutralStroke1,
      visualRefresh: tokens.colorNeutralStroke1,
    },
    groupButtonPrimaryDividerForeground: {
      fluent: tokens.colorNeutralStrokeOnBrand,
      visualRefresh: tokens.colorNeutralStrokeOnBrand,
    },
    groupButtonSubtleDividerForeground: {
      fluent: 'transparent',
      visualRefresh: 'transparent',
    },
    groupButtonTransparentDividerForeground: {
      fluent: 'transparent',
      visualRefresh: 'transparent',
    },
    groupButtonDividerMarginVertical: {
      fluent: '0px',
      visualRefresh: '0px',
    },
    groupButtonPrimaryShadow: {
      // Shadow needs to be null-populated to work with combinations for focus
      fluent: '0 0 0 transparent',
      visualRefresh: '0 0 0 transparent',
    },
    groupButtonNeutralShadow: {
      // Shadow needs to be null-populated to work with combinations for focus
      fluent: '0 0 0 transparent',
      visualRefresh: '0 0 0 transparent',
    },
    groupButtonPrimaryShadowDisabled: {
      // Shadow needs to be null-populated to work with combinations for focus
      fluent: '0 0 0 transparent',
      visualRefresh: '0 0 0 transparent',
    },
    groupButtonNeutralShadowDisabled: {
      // Shadow needs to be null-populated to work with combinations for focus
      fluent: '0 0 0 transparent',
      visualRefresh: '0 0 0 transparent',
    },
    groupButtonPrimaryShadowSelected: {
      // Shadow needs to be null-populated to work with combinations for focus
      fluent: '0 0 0 transparent',
      visualRefresh: '0 0 0 transparent',
    },
    groupButtonNeutralShadowSelected: {
      // Shadow needs to be null-populated to work with combinations for focus
      fluent: '0 0 0 transparent',
      visualRefresh: '0 0 0 transparent',
    },
  },
};
