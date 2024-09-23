// theme.ts
import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme();

const theme = createTheme({
  ...defaultTheme,
  palette: {
    ...defaultTheme.palette,
    primary: {
      main: '#1db954', // Tailwind 的自定义颜色
    },
    secondary: {
      main: '#7289da',
    },
    // 其他颜色
  },
});

export default theme;