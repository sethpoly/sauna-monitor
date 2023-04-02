import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none'
    }
  },
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#000000',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});
