/* eslint-disable */
module.exports = {
  prefix: '',
  important: true,
  separator: ':',
  purge: false,
  // purge: [
  //   './src/**/*.html',
  //   './src/**/*.vue',
  //   './src/**/*.ts',
  // ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1366px',
      // => @media (min-width: 1366) { ... }
      '3xl': '1440px',
      // => @media (min-width: 1440px) { ... }
      '4xl': '1920px',
      // => @media (min-width: 1920px) { ... }
    },
    colors: {
      main: '#353535',
      secondary: '#3DB0D4',
      third: '#D43D96',
      transparent: 'transparent',
      white: '#FFFFFF',
      header: '#2c3e50',
      primary: {
        50: '#F6F6F7',
        100: '#ECEEF0',
        200: '#D0D4D9',
        300: '#B3BAC2',
        400: '#7B8794',
        500: '#425366',
        600: '#3B4B5C',
        700: '#28323D',
        800: '#1E252E',
        900: '#14191F',
      },
      secondary: {
        50: '#FFF9F2',
        100: '#FFF3E6',
        200: '#FFE1BF',
        300: '#FFCF99',
        400: '#FFAC4D',
        500: '#FF8800',
        600: '#E67A00',
        700: '#995200',
        800: '#733D00',
        900: '#4D2900',
      },
      offwhite: {
        100: '#FFFFFF',
        200: '#FFFFFF',
        300: '#F9F9F9',
        400: '#F5F5F5',
        500: '#f1f5f8',
        600: '#E6E6E6',
        700: '#999999',
        800: '#737373',
        900: '#4D4D4D',
      },
      // green
      success: {
        100: '#EFFCED',
        200: '#D8F6D3',
        300: '#C0F1B9',
        400: '#91E784',
        500: '#62DC4F',
        600: '#58C647',
        700: '#3B842F',
        800: '#2C6324',
        900: '#1D4218',
      },
      // red
      error: {
        100: '#FEEDED',
        200: '#FDD2D2',
        300: '#FCB6B6',
        400: '#F98080',
        500: '#F74949',
        600: '#DE4242',
        700: '#942C2C',
        800: '#6F2121',
        900: '#4A1616',
      },
      // yellow
      warning: {
        100: '#FEF8EB',
        200: '#FEEFCD',
        300: '#FDE5AE',
        400: '#FBD172',
        500: '#F9BD35',
        600: '#E0AA30',
        700: '#957120',
        800: '#705518',
        900: '#4B3910',
      },
      black: {
        100: '#E9E9E9',
        200: '#C8C8C8',
        300: '#A7A7A7',
        400: '#646464',
        500: '#222222',
        600: '#1F1F1F',
        700: '#141414',
        800: '#0F0F0F',
        900: '#0A0A0A',
      },
      gray: {
        100: '#F5F6F7',
        200: '#E5E8EC',
        300: '#D5DBE0',
        400: '#B6BFC8',
        500: '#97A4B1',
        600: '#88949F',
        700: '#5B626A',
        800: '#444A50',
        900: '#2D3135',
      },
      status: {
        error: '#FF0000',
        created: '#526880',
        agent: '#FEDC32',
        beyondgateway: '#0099FF',
        gateway: '#0000CC',
        missing: '#FF6666',
        parsed: '#6FDF3D',
        scrap: '#5B626A',
        warning: '#FFA500',
        repair: '#006400',

      }
    },
    spacing: {
      px: '1px',
      '0': '0',
      '2': '0.125rem',
      '4': '0.25rem',
      '8': '0.5rem',
      '16': '1rem',
      '24': '1.5rem',
      '32': '2rem',
      '40': '2.5rem',
      '48': '3rem',
      '56': '3.5rem',
      '64': '4rem',
      '96': '6rem',
      '128': '8rem',
      '160': '10rem',
      '240': '15rem',
      '400': '25rem',
    },
    backgroundColor: theme => theme('colors'),
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },
    borderColor: theme => ({
      ...theme('colors'),
      default: theme('colors.gray.300', 'currentColor'),
    }),
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      default: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '1.5rem',
      full: '9999px',
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
      '8': '8px',
    },
    boxShadow: {
      xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none',
    },
    container: {},
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed',
    },
    divideColor: theme => theme('borderColor'),
    divideOpacity: theme => theme('borderOpacity'),
    divideWidth: theme => theme('borderWidth'),
    fill: {
      current: 'currentColor',
    },
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    flexGrow: {
      '0': '0',
      default: '1',
    },
    flexShrink: {
      '0': '0',
      default: '1',
    },
    fontFamily: {
      sans: [
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      header: [
        '"Cooper LT BT"',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
      ],
      body: [
        '"TT Norms"',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
      ],
    },
    fontSize: {
      xxs: '0.46875rem',
      xs: '0.5625rem',
      sm: '0.675rem',
      base: '0.75rem',
      lg: '1rem',
      xl: '1.125rem',
      '2xl': '1.25rem',
      '3xl': '1.5rem',
      '4xl': '1.875rem',
      '5xl': '2.25rem',
      '6xl': '3rem',
      '7xl': '4rem',
    },
    fontWeight: {
      hairline: '100',
      thin: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
      '1/4-screen': '25vh',
    }),
    inset: (theme, { negative }) => ({
      '0': '0',
      auto: 'auto',
      '1/2': '50%',
      '-1/2': '-50%',
      'full': '100%',
      '-full': '-100%',
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      '3': '.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },
    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    maxHeight: {
      full: '100%',
      screen: '100vh',
      '320': '20rem',
    },
    maxWidth: (theme, { breakpoints }) => ({
      none: 'none',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      full: '100%',
      ...breakpoints(theme('screens')),
    }),
    minHeight: theme => ({
      ...theme('spacing'),
      '0': '0',
      full: '100%',
      screen: '100vh',
      '600': '37.5rem',

    }),
    minWidth: {
      '0': '0',
      full: '100%',
    },
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    opacity: {
      '0': '0',
      '25': '0.25',
      '33': '0.33',
      '50': '0.5',
      '75': '0.75',
      '66': '0.66',
      '100': '1',
    },
    padding: theme => theme('spacing'),
    placeholderColor: theme => theme('colors'),
    stroke: {
      current: 'currentColor',
    },
    strokeWidth: {
      '0': '0',
      '1': '1',
      '2': '2',
    },
    textColor: theme => theme('colors'),
    width: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/8': '12.5%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      'menu':   '16rem',
      'filter': '4.5rem',
      'filter-peek': '5rem',
      full: '100%',
      screen: '100vw',
    }),
    zIndex: {
      auto: 'auto',
      '0': '0',
      '10': '10',
      '20': '20',
      '30': '30',
      '40': '40',
      '50': '50',
      '60': '60',
    },
    gap: theme => theme('spacing'),
    transformOrigin: {
      center: 'center',
      top: 'top',
      'top-right': 'top right',
      right: 'right',
      'bottom-right': 'bottom right',
      bottom: 'bottom',
      'bottom-left': 'bottom left',
      left: 'left',
      'top-left': 'top left',
    },
    scale: {
      '0': '0',
      '50': '.5',
      '75': '.75',
      '100': '1',
      '102': '1.02',
      '125': '1.25',
      '150': '1.5',
    },
    rotate: {
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      '0': '0',
      '45': '45deg',
      '90': '90deg',
      '180': '180deg',
    },
    translate: (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
      '-full': '-100%',
      '-1/2': '-50%',
      '1/2': '50%',
      full: '100%',
    }),
    transitionProperty: {
      none: 'none',
      all: 'all',
      default: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
      colors: 'background-color, border-color, color, fill, stroke',
      opacity: 'opacity',
      shadow: 'box-shadow',
      transform: 'transform',
    },
    transitionTimingFunction: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    transitionDuration: {
      '75': '75ms',
      '100': '100ms',
      '150': '150ms',
      '200': '200ms',
      '300': '300ms',
      '500': '500ms',
      '700': '700ms',
      '800': '800ms',
      '1000': '1000ms',
    },
    ripple: theme => ({
      colors: theme('colors'),
    }),
  },
  variants: {
    accessibility: ['responsive', 'focus'],
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus'],
    boxSizing: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    divideColor: ['responsive'],
    divideOpacity: ['responsive'],
    divideWidth: ['responsive'],
    fill: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    clear: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    inset: ['responsive'],
    justifyContent: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    order: ['responsive'],
    outline: ['responsive', 'focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    placeholderColor: ['responsive', 'focus'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    stroke: ['responsive'],
    strokeWidth: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: ['responsive'],
    gap: ['responsive'],
    transform: ['responsive'],
    transformOrigin: ['responsive'],
    scale: ['responsive', 'hover', 'focus'],
    rotate: ['responsive', 'hover', 'focus'],
    translate: ['responsive', 'hover', 'focus', 'group-hover'],
    skew: ['responsive', 'hover', 'focus'],
    transitionProperty: ['responsive'],
    transitionTimingFunction: ['responsive'],
    transitionDuration: ['responsive'],
  },
  corePlugins: {},
  plugins: [
    require('tailwindcss-ripple')(),
  ],
}

