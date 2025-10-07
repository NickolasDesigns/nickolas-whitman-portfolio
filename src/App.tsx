import React, { type ReactElement } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Theme, useTheme, ThemeProvider } from '@mui/material';
import Home from './views/Home';
import Pong from './views/Pong';
import NotFoundPage from './views/NotFoundPage';
import { Navbar } from './components/NavBar';
import Resume from './views/resume';
import SCADA from './views/SCADA';

function App(): ReactElement {
    const theme: Theme = useTheme();
    const isProd = process.env.NODE_ENV === 'production';

    return (
        <ThemeProvider theme={theme}>
            <Router basename={isProd ? '/nickolas-whitman-portfolio' : '/'}>
                <div style={{ position: 'relative', width: '100%', height: '100vh', overflowY: 'hidden', overflowX: "visible" }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "start",
                        alignItems: "center",
                        width: "100%",
                        height: "100%"
                    }}>
                        <Navbar />
                        <Routes>
                            <Route index path="/" element={<Home />} />
                            <Route path="/resume" element={<Resume />} />
                            <Route path="/SCADA" element={<SCADA />} />
                            <Route path="/pong" element={<Pong />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
