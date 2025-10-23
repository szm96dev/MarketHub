import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useTheme } from '../contexts/ThemeContext';

const MuiThemeProvider = ({ children }) => {
  const { isDark } = useTheme();

  const theme = createTheme({
    palette: {
      mode: isDark ? 'dark' : 'light',
      primary: {
        main: isDark ? '#64b5f6' : '#1976d2',
        light: isDark ? '#90caf9' : '#42a5f5',
        dark: isDark ? '#42a5f5' : '#1565c0',
      },
      secondary: {
        main: isDark ? '#42a5f5' : '#42a5f5',
        light: isDark ? '#64b5f6' : '#64b5f6',
        dark: isDark ? '#1976d2' : '#1976d2',
      },
      background: {
        default: isDark ? '#121212' : '#ffffff',
        paper: isDark ? '#1e1e1e' : '#ffffff',
      },
      text: {
        primary: isDark ? '#ffffff' : '#212121',
        secondary: isDark ? '#b3b3b3' : '#878787',
      },
      divider: isDark ? '#333333' : '#e0e0e0',
    },
    components: {
      MuiStepper: {
        styleOverrides: {
          root: {
            '& .MuiStepLabel-label': {
              color: isDark ? '#ffffff' : '#212121',
              '&.Mui-active': {
                color: isDark ? '#64b5f6' : '#1976d2',
              },
              '&.Mui-completed': {
                color: isDark ? '#64b5f6' : '#1976d2',
              },
            },
            '& .MuiStepIcon-root': {
              color: isDark ? '#333333' : '#e0e0e0',
              '&.Mui-active': {
                color: isDark ? '#64b5f6' : '#1976d2',
              },
              '&.Mui-completed': {
                color: isDark ? '#64b5f6' : '#1976d2',
              },
            },
            '& .MuiStepConnector-line': {
              borderColor: isDark ? '#333333' : '#e0e0e0',
            },
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
        paper: {
          backgroundColor: isDark ? '#1e1e1e' : '#ffffff',
          color: isDark ? '#ffffff' : '#212121',
          border: isDark ? '1px solid #333333' : '1px solid #e0e0e0',
        },
        },
      },
      MuiDialogTitle: {
        styleOverrides: {
        root: {
          color: isDark ? '#ffffff' : '#212121',
          borderBottom: isDark ? '1px solid #333333' : '1px solid #e0e0e0',
        },
        },
      },
      MuiDialogContent: {
        styleOverrides: {
          root: {
            color: isDark ? '#b3b3b3' : '#878787',
          },
        },
      },
      MuiDialogActions: {
        styleOverrides: {
          root: {
            borderTop: isDark ? '1px solid #333333' : '1px solid #e0e0e0',
            padding: '16px 24px',
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              backgroundColor: isDark ? '#121212' : '#ffffff',
              color: isDark ? '#ffffff' : '#212121',
              '& fieldset': {
                borderColor: isDark ? '#333333' : '#e0e0e0',
              },
              '&:hover fieldset': {
                borderColor: isDark ? '#64b5f6' : '#1976d2',
              },
              '&.Mui-focused fieldset': {
                borderColor: isDark ? '#64b5f6' : '#1976d2',
              },
            },
            '& .MuiInputLabel-root': {
              color: isDark ? '#808080' : '#878787',
              '&.Mui-focused': {
                color: isDark ? '#64b5f6' : '#1976d2',
              },
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: '12px',
            padding: '12px 24px',
          },
          contained: {
            backgroundColor: isDark ? '#64b5f6' : '#1976d2',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: isDark ? '#42a5f5' : '#1565c0',
            },
          },
          outlined: {
            borderColor: isDark ? '#333333' : '#e0e0e0',
            color: isDark ? '#ffffff' : '#212121',
            '&:hover': {
              borderColor: isDark ? '#64b5f6' : '#1976d2',
              backgroundColor: isDark ? 'rgba(100, 181, 246, 0.1)' : 'rgba(25, 118, 210, 0.1)',
            },
          },
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;