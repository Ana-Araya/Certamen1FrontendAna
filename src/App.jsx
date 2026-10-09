
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Header from './templates/Headers.jsx';
import EjercitoContainer from './containers/EjercitoContainer.jsx';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#c084fc',
      light: '#dfb8ff',
      dark: '#8b5cf6',
    },
    secondary: {
      main: '#f472b6',
      light: '#f9a8d4',
      dark: '#db2777',
    },
    background: {
      default: '#0d0912',
      paper: '#191321',
    },
    text: {
      primary: '#f8f2ff',
      secondary: '#c4b5d0',
    },
    divider: 'rgba(216, 180, 254, 0.16)',
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    button: {
      fontWeight: 700,
      textTransform: 'none',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minWidth: 320,
          backgroundColor: '#0d0912',
          backgroundImage:
            'radial-gradient(ellipse at 15% 0%, rgba(126, 34, 206, 0.2), transparent 38%), radial-gradient(ellipse at 90% 20%, rgba(219, 39, 119, 0.12), transparent 32%)',
          backgroundAttachment: 'fixed',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid rgba(192, 132, 252, 0.2)',
          backgroundImage:
            'linear-gradient(145deg, rgba(34, 25, 46, 0.98), rgba(22, 16, 30, 0.98))',
          boxShadow: '0 18px 50px rgba(0, 0, 0, 0.28)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <EjercitoContainer />
    </ThemeProvider>
  );
}

export default App;