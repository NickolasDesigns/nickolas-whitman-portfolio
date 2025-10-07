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
                position: 'relative',
                width: '100%',
                height: "fit-content",
                zIndex: 50,
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(4px)'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: "center-top",
                }}
            >
                <div style={{ width: 'fit-content', display: "flex", flexDirection: "row" }} >
                    <img src={Logo} alt="" style={{ width: '20%'}} />
                    <div style={{ display: "flex", flexDirection: "column", alignContent: "top", width: "80%", paddingLeft:"8px"}}>
                        <Typography style={{ color: tabName === "Home" ? 'white' : "black", fontSize: '1.5rem' }}>Nickolas M. Whitman</Typography>
                        <Typography style={{ color: tabName === "Home" ? 'white' : "black", fontSize: '1rem'}}>Automation Engineer</Typography>
                    </div>
                </div>
                <div style={{ width: '60%', display: "flex", justifyContent: "left" }}>
                    <AppTabs />
                </div>
            </div>
        </div>
    );
};
