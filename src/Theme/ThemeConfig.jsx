import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';
import React from 'react';
import useFeedBacks from '../redux/Providers/FeedBacksProviders';

const ThemeConfig = ({ children }) => {
    const { theme_mode } = useFeedBacks();

    const lightThemePalette = {
        mode: 'light',
        background: {
            default: '#F5F7FA',
            paper: '#FFFFFF',
        },
        primary: {
            light: '#81C784',
            main: '#388E3C',
            dark: '#1B5E20',
            contrastText: '#FFFFFF',
        },
        secondary: {
            light: '#FFEB3B',
            main: '#FBC02D',
            dark: '#F57F17',
            contrastText: '#000000',
        },
        text: {
            primary: '#212121',
            secondary: '#757575',
        },
        error: {
            main: '#D32F2F',
        },
        success: {
            main: '#388E3C',
        },
        warning: {
            main: '#F57C00',
        },
        info: {
            main: '#0288D1',
        },
    };

    const darkThemePalette = {
        mode: 'dark',
        background: {
            default: '#121212',
            paper: '#1D1D1D',
        },
        primary: {
            light: '#66BB6A',
            main: '#388E3C',
            dark: '#1B5E20',
            contrastText: '#FFFFFF',
        },
        secondary: {
            light: '#FFEB3B',
            main: '#FBC02D',
            dark: '#F57F17',
            contrastText: '#000000',
        },
        text: {
            primary: '#E0E0E0',
            secondary: '#B0BEC5',
        },
        error: {
            main: '#D32F2F',
        },
        success: {
            main: '#388E3C',
        },
        warning: {
            main: '#FF9800',
        },
        info: {
            main: '#0288D1',
        },
    };

    const theme = createTheme({
        palette: theme_mode === 'dark' ? darkThemePalette : lightThemePalette,
        typography: {
            fontFamily: "'Roboto', 'Arial', sans-serif",
            fontSize: 14,
            h1: { fontSize: '3rem', fontWeight: 700 },
            h2: { fontSize: '2.5rem', fontWeight: 600 },
            h3: { fontSize: '2rem', fontWeight: 500 },
            body1: { fontSize: '1rem', color: 'text.primary' },
            body2: { fontSize: '0.875rem', color: 'text.secondary' },
        },
        components: {
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        backgroundColor: theme_mode === 'light' ? '#388E3C' : '#1B5E20',
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    contained: {
                        backgroundColor: '#388E3C',
                        color: '#FFFFFF',
                        '&:hover': {
                            backgroundColor: '#1B5E20',
                        },
                    },
                    outlined: {
                        borderColor: '#388E3C',
                        color: '#388E3C',
                        '&:hover': {
                            borderColor: '#1B5E20',
                            backgroundColor: 'rgba(56, 142, 60, 0.08)',
                        },
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        backgroundColor: theme_mode === 'dark' ? '#1D1D1D' : '#FFFFFF',
                        boxShadow: theme_mode === 'dark'
                            ? '0px 4px 15px rgba(0, 0, 0, 0.6)'
                            : '0px 4px 10px rgba(0, 0, 0, 0.2)',
                    },
                },
            },
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#388E3C',
                            },
                            '&:hover fieldset': {
                                borderColor: '#1B5E20',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#388E3C',
                            },
                        },
                    },
                },
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default ThemeConfig;
