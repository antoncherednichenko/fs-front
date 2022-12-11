import { createTheme } from '@mui/material/styles';
import { maxWidth, typography } from '@mui/system';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
  interface Palette {
    primaryPurple: string
    cream: string
    appGreen: string
    lightPurple: string
    appBlue: string
    lightBlue: string
    appBlack: string
  }
  interface PaletteOptions {
    primaryPurple: string
    cream: string
    appGreen: string
    lightPurple: string
    appBlue: string
    lightBlue: string
    appBlack: string
  }
}

export const theme = createTheme({
  palette: {
    primaryPurple: '#B8A4FD',
    cream: '#FFFDF8',
    appGreen: '#D7FAD7',
    lightPurple: '#E2DBFB',
    appBlue: '#BDDEFD',
    lightBlue: '#F2F9FF',
    appBlack: '#222',
    primary: {
      main: '#222'
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,

    }
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    fontSize:18,
  },
})

theme.typography.h1 = {
  fontSize: 110,
  lineHeight: '110px',
  color: theme.palette.appBlack,
  fontFamily: theme.typography.fontFamily,
  [theme.breakpoints.down("desktop")]: {
    fontSize: 85,
    lineHeight: '85px',
  },
  [theme.breakpoints.down("laptop")]: {
    fontSize: 65,
    lineHeight: '65px',
  },
  [theme.breakpoints.down("tablet")]: {
    fontSize: 55,
    lineHeight: '55px',
  }
}

theme.typography.h3 = {
  fontSize: 53,
  color: theme.palette.appBlack,
  lineHeight: '78px',
  fontFamily: theme.typography.fontFamily,
}

theme.typography.body1 = {
  fontSize: 14,
  lineHeight: '23px',
  fontFamily: theme.typography.fontFamily,
}

theme.typography.body2 = {
  fontSize: 18,
  lineHeight: '25px',
  color: theme.palette.appBlack,
  fontFamily: theme.typography.fontFamily,
}

if (theme.components) {
  theme.components.MuiButton = {
    styleOverrides: {
      root: {
        padding: 0,
        background: theme.palette.primaryPurple,
        border: `2px solid ${theme.palette.appBlack}`,
        borderRadius: 0,
        fontWeight: 600,
        '&:hover': {
          background: theme.palette.primaryPurple,
          boxShadow: '5px 5px 0px 0px rgb(34 34 34)',
          transform: 'translate(-2px, -2px)',
        },
        [theme.breakpoints.down('tablet')]: {
          width: '100%',
        }
      },
      text: {
        background: 'none',
        '&:hover': {
          background: 'none',
          boxShadow: '5px 5px 0px 0px rgb(34 34 34)',
          transform: 'translate(-2px, -2px)',
        },
      },
      contained: {
        background: 'none',
        color: theme.palette.appBlack,
        border: 'none',
        boxShadow: 'none',
        p: 0,
        '&:hover': {
          background: 'none',
          color: theme.palette.primaryPurple,
          boxShadow: 'none',
          transform: 'none'
        },
      }
    },
  }
  theme.components.MuiContainer = {
    styleOverrides: {
      root: {
        width: '100%',
        maxWidth: theme.breakpoints.values.desktop,
        margin: '0 auto',
        px: '15px',
        [theme.breakpoints.down("desktop")]: {
          maxWidth: theme.breakpoints.values.laptop,
        },
        [theme.breakpoints.down("laptop")]: {
          maxWidth: '100%',
          margin: 0,
        },
      }
    }
  }
  theme.components.MuiLink = {
    styleOverrides: {
      root: {
        fontSize: 14,
        textDecoration: 'none',
        cursor: 'pointer',
        fontFamily: 'Inter, sans-serif',
        '&:hover': {
          textDecoration: 'underline',
          color: theme.palette.primaryPurple,
        },
      }
    }
  }
  theme.components.MuiIconButton = {
    styleOverrides: {
      root: {
        color: theme.palette.appBlack,
      }
    }
  }
  theme.components.MuiMenu = {
    styleOverrides: {
      list: {
        background: theme.palette.lightBlue,
        border: `2px solid ${theme.palette.appBlack}`,
        boxShadow: 'none',
      }
    }
  }
  theme.components.MuiPaper = {
    styleOverrides: {
      root: {
        boxShadow: 'none',
        borderRadius: 0,
      }
    }
  }
  theme.components.MuiMenuItem = {
    styleOverrides: {
      root: {
        borderBottom: `1px solid ${theme.palette.appBlack}`
      }
    }
  }
  theme.components.MuiCard = {
    styleOverrides: {
      root: {
        background: theme.palette.cream,
        border: `2px solid ${theme.palette.appBlack}`
      }
    }
  }
}