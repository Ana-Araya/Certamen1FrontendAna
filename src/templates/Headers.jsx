import { AppBar, Toolbar, Typography } from '@mui/material';

function Header() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        mb: 4,
        background:
          'linear-gradient(110deg, rgba(30, 16, 43, 0.98), rgba(25, 12, 30, 0.98) 58%, rgba(50, 17, 43, 0.98))',
        borderBottom: '1px solid rgba(244, 114, 182, 0.3)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.28)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', gap: 2, minHeight: { xs: 76, sm: 88 } }}>
        <Typography 
          variant="h5" 
          sx={{
            color: 'primary.light',
            fontWeight: 900,
            textTransform: 'uppercase',
            fontFamily: 'Impact, sans-serif',
            letterSpacing: { xs: 1, sm: 3 },
            textShadow: '0 0 22px rgba(192, 132, 252, 0.42)',
          }}
        >
          Anillo Único
        </Typography>
        <Typography 
          variant="subtitle1" 
          sx={{
            color: 'secondary.light',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: { xs: 0.5, sm: 1.5 },
            textAlign: 'right',
            fontSize: { xs: '0.68rem', sm: '0.9rem' },
          }}
        >
          Uno para dominarlos a todos
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;