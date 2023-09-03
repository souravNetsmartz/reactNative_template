import {createTheme} from '@shopify/restyle';

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#0B0B0B',
  white: '#F0F2F3',
  transparent: 'transparent',
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
    buttonPrimaryBackground: palette.greenPrimary,
    shadow: palette.black,
    transparent: palette.transparent,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontWeight: 'bold',
      fontSize: 34,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    defaults: {
      // We can define a default text variant here.
    },
  },

  cardVarients: {
    regular: {
      // We can refer to other values in the theme here, and use responsive props
      padding: {
        phone: 's',
        tablet: 'm',
      },
      backgroundColor: 'cardPrimaryBackground',
    },
    elevated: {
      padding: {
        phone: 's',
        tablet: 'm',
      },

      shadowColor: 'shadow',
      shadowOpacity: 0.2,
      shadowOffset: {width: 0, height: 5},
      shadowRadius: 15,
      elevation: 5,
      backgroundColor: 'buttonPrimaryBackground',
    },
    defaults: {
      // We can define defaults for the variant here.
      // This will be applied after the defaults passed to createVariant and before the variant defined below.
    },
  },
  buttonVarients: {
    contained: {
      backgroundColor: 'buttonPrimaryBackground',
      borderWidth: 0, // No border for contained
      // Add other contained button styles here
    },
    outline: {
      backgroundColor: 'transparent',
      borderColor: 'shadow',
      borderWidth: 1, // Border width for outline
      // Add other outline button styles here
    },
  },
});

export type Theme = typeof theme;
export default theme;
