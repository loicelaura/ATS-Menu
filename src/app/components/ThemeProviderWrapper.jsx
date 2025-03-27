'use client';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
});

const ThemeProviderWrapper = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderWrapper;