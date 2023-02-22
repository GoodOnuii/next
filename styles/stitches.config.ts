import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';

export type CSS = Stitches.CSS<typeof config>;

export const { getCssText, keyframes, globalCss, styled, css, theme, config } = createStitches({
  utils: {
    bg: (value: Stitches.PropertyValue<'background'>) => ({
      background: value,
    }),

    // An abbreviated property for border-radius
    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),

    // A property to apply linear gradient
    linearGradient: (value: Stitches.PropertyValue<'backgroundImage'>) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
    // Abbreviated margin properties
    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),

    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginBottom: value,
      marginTop: value,
    }),
    radialGradient: (value: Stitches.PropertyValue<'backgroundImage'>) => ({
      backgroundImage: `radial-gradient(${value})`,
    }),

    // A property for applying width/height together
    size: (value: Stitches.PropertyValue<'width'>) => ({
      height: value,
      width: value,
    }),
  },
});
