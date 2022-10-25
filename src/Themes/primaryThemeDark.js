import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

export const themeOptions = {
  palette: {
    type: 'dark',
    primary: {
      main: '#3f51b5',
      dark: '#572c7e',
    },
    secondary: {
      main: '#f50057',
      light: '#33f7a0',
      dark: '#0018ab',
    },
    text: {
      primary: 'rgba(0,0,0,0.87)',
    },
    error: {
      main: '#36a6f4',
      dark: 'rgba(37,170,51,0.87)',
      contrastText: 'rgba(0,0,0,0.87)',
    },
  },
};