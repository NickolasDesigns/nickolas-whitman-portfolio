import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Box, Tabs, Tab } from '@mui/material';
// import Resume from '../resume';
import PongGame from '../Pong';

export function AppBar() {
    const [value, setValue] = React.useState<number>(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Router>
            <Box sx={{ maxWidth: '100%', height: window.innerHeight, bgcolor: 'background.paper' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs example"
                    style={{ height: '20px' }}
                >
                    {/** <Tab label="Resume" component={Link} to="/resume" /> */}
                    <Tab label="Pong" component={Link} to="/pong" />
                </Tabs>
                <Routes>
                    {/** <Route path="/resume" element={<Resume />} /> */}
                    <Route
                        path="/pong"
                        element={
                            <div style={{ height: '90%', width: '100%' }}>
                                <PongGame />
                            </div>
                        }
                    />
                </Routes>
            </Box>
        </Router>
    );
}
