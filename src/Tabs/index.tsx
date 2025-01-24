import React from 'react';
import { Tabs, Tab, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppDispatch } from 'src/app/hooks';
import { changeTab } from 'src/reducers/selectedTabReducer';

const AppTabs = () => {
    const [value, setValue] = React.useState("Home");
    const dispatch = useAppDispatch();

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        dispatch(changeTab(newValue))
    };

    function buildLabelComponent(label: string) {
        return <Typography style={{ color: value === "Pong" ? 'black' : 'white', fontSize: '2rem' }}>{label}</Typography>;
    }

    return (
        <div style={{height: "100%"}}>
            <Tabs value={value} onChange={handleChange} flex-container>
                <Tab value="Home" label={buildLabelComponent('Home')} component={Link} to="/" style={{ marginRight: '20px' }} />
                <Tab value="Pong" label={buildLabelComponent('Pong')} component={Link} to="/pong" style={{ marginRight: '20px' }} />
            </Tabs>
        </div>
    );
};

export default AppTabs;
