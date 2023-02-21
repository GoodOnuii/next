import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';

export type CSS = Stitches.CSS<typeof config>;

export const { getCssText, keyframes, globalCss, styled, css, theme, config } = createStitches({
  utils: {
    // Abbreviated margin properties
    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    // A property for applying width/height together
    size: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),

    // A property to apply linear gradient
    linearGradient: (value: Stitches.PropertyValue<'backgroundImage'>) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    radialGradient: (value: Stitches.PropertyValue<'backgroundImage'>) => ({
      backgroundImage: `radial-gradient(${value})`,
    }),

    // An abbreviated property for border-radius
    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),
    bg: (value: Stitches.PropertyValue<'background'>) => ({
      background: value,
    }),
  },
});
