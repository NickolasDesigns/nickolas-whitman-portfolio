import React, { useEffect } from 'react';
import { Tabs, Tab, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch } from 'src/app/hooks';
import { changeTab } from 'src/reducers/selectedTabReducer';

export const HomeTabValue = "Home";
export const ResumeTabValue = "Resume";
export const PongTabValue = "Pong";
export const SCADATabValue = "SCADA";

const AppTabs = () => {
    const location = useLocation();
    const [value, setValue] = React.useState("Home");
    const dispatch = useAppDispatch();
    const customTabStyling = {
        marginRight: '20px',
        transition: 'all 0.2s',
        '&:hover': {
            backgroundColor: value === HomeTabValue ? '#333' : '#eee',
            color: value === HomeTabValue ?'#fff' : '#222',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            transform: 'scale(1.05)'
        },
    };

    useEffect(() => {
        if (location.pathname === "/pong") {
            setValue(PongTabValue);
            dispatch(changeTab(PongTabValue));
        } else if (location.pathname === "/") {
            setValue(HomeTabValue);
            dispatch(changeTab(HomeTabValue));
        } else if (location.pathname === "/resume") {
            setValue(ResumeTabValue);
            dispatch(changeTab(ResumeTabValue));
        }  else if (location.pathname === "/SCADA") {
            setValue(SCADATabValue);
            dispatch(changeTab(SCADATabValue));
        }
    }, [location.pathname, dispatch]);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        dispatch(changeTab(newValue))
    };

    function buildLabelComponent(label: string) {
        return <Typography style={{ color: value === HomeTabValue ? 'white': 'black', fontSize: '2rem' }}>{label}</Typography>;
    }

    return (
        <div style={{height: "100%"}}>
            <Tabs value={value} onChange={handleChange} flex-container>
                <Tab value={HomeTabValue} label={buildLabelComponent(HomeTabValue)} component={Link} to="/" sx={customTabStyling} />
                <Tab value={SCADATabValue} label={buildLabelComponent(SCADATabValue)} component={Link} to="/SCADA" sx={customTabStyling} />
                <Tab value={ResumeTabValue} label={buildLabelComponent(ResumeTabValue)} component={Link} to="/resume" sx={customTabStyling} />
                <Tab value={PongTabValue} label={buildLabelComponent(PongTabValue)} component={Link} to="/pong" sx={customTabStyling} />
            </Tabs>
        </div>
    );
};

export default AppTabs;
