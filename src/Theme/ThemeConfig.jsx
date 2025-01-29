import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline, Stack, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import { snap_features } from 'snap-react';
import MuiCard from '@mui/material/Card';

const ThemeConfig = ({ children }) => {
    const { theme_mode } = snap_features();

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


export const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    borderRadius: '25px',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
        maxWidth: '450px',
    },
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    ...theme.applyStyles('dark', {
        boxShadow:
            'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));



export const SignInContainer = styled(Stack)(({ theme }) => ({
    height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
    minHeight: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
    },
    '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        zIndex: -1,
        inset: 0,
        backgroundImage:
            'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
        backgroundRepeat: 'no-repeat',
        ...theme.applyStyles('dark', {
            backgroundImage:
                'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
        }),
    },
}));

export const SignUpContainer = styled(Stack)(({ theme }) => ({
    height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
    minHeight: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
    },
    '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        zIndex: -1,
        inset: 0,
        backgroundImage:
            'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
        backgroundRepeat: 'no-repeat',
        ...theme.applyStyles('dark', {
            backgroundImage:
                'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
        }),
    },
}));


export const InputField = styled(TextField)(({ }) => ({
    '& .MuiInputBase-root': {
        height: '42px',
    },
    '& .MuiInputBase-input': {
        padding: '6px 10px',
        fontSize: '14px',
    },
    '& .MuiFormLabel-root': {
        fontSize: '14px',
    },
    '& .MuiFormHelperText-root': {
        fontSize: '12px',
    },
}));



export default ThemeConfig;
