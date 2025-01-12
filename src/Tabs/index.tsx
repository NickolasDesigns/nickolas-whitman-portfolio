import React from 'react';
import { Tabs, Tab } from '@mui/material';
import { Link } from 'react-router-dom';

const AppTabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Home" component={Link} to="/" />
            <Tab label="Pong" component={Link} to="/pong" />
        </Tabs>
    );
};

export default AppTabs;
