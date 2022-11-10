import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
      primary: {
        main: '#222',
      },
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
              transform: ' translate(-2px, -2px)',
            },
          },
          text: {
            background: 'none',
            '&:hover': {
              background: 'none',
              boxShadow: '5px 5px 0px 0px rgb(34 34 34)',
              transform: ' translate(-2px, -2px)',
            },
          }
        },
      },
    },
  })