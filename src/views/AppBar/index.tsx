import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Box, Tabs, Tab } from '@mui/material';
import Resume from '../resume';

export default function ScrollableTabsButtonForce() {
    const [value, setValue] = React.useState<number>(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Router>
            <Box sx={{ maxWidth: '100%', bgcolor: 'background.paper' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs example"
                >
                    <Tab label="Resume" component={Link} to="/resume" />
                    <Tab label="Pong" component={Link} to="/pong" />
                </Tabs>
                <Routes>
                    <Route path="/resume" element={<Resume />} />
                    <Route
                        path="/pong"
                        element={
                            <iframe
                                src={'../Pong/pong.html'}
                                title="Pong Game"
                                style={{ width: '100%', height: '100%', border: 'none' }}
                            />
                        }
                    />
                </Routes>
            </Box>
        </Router>
    );
}
