import React from 'react';
import { Tabs, Tab, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const AppTabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    function buildLabelComponent(label: string) {
        return <Typography style={{ color: value === 1 ? 'black' : 'white', fontSize: '2rem' }}>{label}</Typography>;
    }

    return (
        <Tabs value={value} onChange={handleChange} centered>
            <Tab label={buildLabelComponent('Home')} component={Link} to="/" style={{ marginRight: '20px' }} />
            <Tab label={buildLabelComponent('Pong')} component={Link} to="/pong" style={{ marginRight: '20px' }} />
        </Tabs>
    );
};

export default AppTabs;
