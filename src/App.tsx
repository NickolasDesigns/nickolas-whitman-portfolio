import React, { type ReactElement } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Theme, useTheme, ThemeProvider, Box } from '@mui/material';
import Home from './views/Home';
import Pong from './views/Pong';
import NotFoundPage from './views/NotFoundPage';
import { Navbar } from './components/NavBar';

function App(): ReactElement {
    const theme: Theme = useTheme();
    const isProd = process.env.NODE_ENV === 'production';
    console.log(process.env.NODE_ENV);
    return (
        <ThemeProvider theme={theme}>
            <Router basename={isProd ? '/nickolas-whitman-portfolio' : '/'}>
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: '100%',
                        bgcolor: 'background.paper',
                    }}
                >
                    <Navbar />
                    <Routes>
                        <Route index path="/" element={<Home />} />
                        <Route path="/pong" element={<Pong />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </Box>
            </Router>
        </ThemeProvider>
    );
}

export default App;
