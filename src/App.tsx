import React, { type ReactElement } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Theme, useTheme, ThemeProvider, Box } from '@mui/material';
import AppTabs from './Tabs';
import Home from './views/Home';
import Pong from './views/Pong';

function App(): ReactElement {
    const theme: Theme = useTheme();
    return (
        <ThemeProvider theme={theme}>
            <Router basename={process.env.NODE_ENV === 'development' ? '/' : '/nickolas-whitman-portfolio'}>
                <Box sx={{ maxWidth: '100%', height: window.innerHeight, bgcolor: 'background.paper' }}>
                    <AppTabs />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/pong"
                            element={
                                <div style={{ height: '90%', width: '100%' }}>
                                    <Pong />
                                </div>
                            }
                        />
                    </Routes>
                </Box>
            </Router>
        </ThemeProvider>
    );
}

export default App;
