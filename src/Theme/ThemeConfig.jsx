import { ThemeProvider } from '@emotion/react'
import { createTheme, CssBaseline } from '@mui/material';
import React from 'react'
import useFeedBacks from '../redux/Providers/FeedBacksProviders';

const ThemeConfig = ({ children }) => {

    const { theme_mode } = useFeedBacks()

    const theme = createTheme({
        palette: {
            mode: theme_mode,
            primary: {
                light: '#757ce8',
                main: '#3f50b5',
                dark: '#002884',
                contrastText: '#fff',
            },
            secondary: {
                light: '#ff7961',
                main: '#f44336',
                dark: '#ba000d',
                contrastText: '#000',
            },
        },
    });



    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

export default ThemeConfig
