import React from 'react';
import Logo from '../assets/logo.png';
import AppTabs from '../Tabs';
import { Typography } from '@mui/material';
import { useAppSelector } from 'src/app/hooks';

export const Navbar = () => {
    const { tabName }= useAppSelector((state) => state.tabName)

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: '100%',
                zIndex: 50,
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(4px)',
                paddingTop: '1rem',
                paddingBottom: '1rem',
            }}
        >
            <div className="container">
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: "center-top",
                    }}
                >
                    <div style={{ width: '40%', paddingRight: '20px', paddingLeft: '20px', display: "flex", flexDirection: "row" }} >
                        <img src={Logo} alt="" style={{ width: '20%'}} />
                        <div style={{ display: "flex", flexDirection: "column", alignContent: "top", width: "80%", paddingLeft:"8px"}}>
                            <Typography style={{ color: 'white', fontSize: '1.5rem' }}>Nickolas M. Whitman</Typography>
                            <Typography style={{ color: 'white', fontSize: '1rem'}}>Automation Software Engineer</Typography>
                        </div>
                    </div>
                    <div style={{ width: '60%', display: "flex", justifyContent: "left" }}>
                        <AppTabs />
                    </div>
                </div>
            </div>
        </div>
    );
};
