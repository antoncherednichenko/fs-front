import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
      primary: {
        main: '#222',
      },
    },
    typography: {
      fontFamily: 'Inter, sans-serif',
      h1: {
        fontSize: 110,
        lineHeight: '110px',
        color: '#222',
      },
      h3: {
        fontSize: 53,
        color: '#222',
        lineHeight: '78px',
      },
      body2: {
        fontSize: 16,
        lineHeight: '25px',
        color: '#222',
      }
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            background: '#B8A4FD',
            border: '2px solid #222',
            borderRadius: 0,
            fontWeight: 600,
            '&:hover': {
              background: '#B8A4FD',
              boxShadow: '5px 5px 0px 0px rgb(34 34 34)',
              transform: 'translate(-2px, -2px)',
            },
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
            background: '#FFFDF8',
            color: '#222',
            borderRadius: 5,
            '&:hover': {
              background: '#FFFDF8',
              color: '#B8A4FD',
              boxShadow: 'none',
              transform: 'none'
            },
          }
        },
      },
    },
  })