import React from 'react';
import Logo from '../assets/logo.png';
import AppTabs from '../Tabs';
import { Typography } from '@mui/material';

export const Navbar = () => {
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
                        alignItems: 'center',
                    }}
                >
                    <img src={Logo} alt="" style={{ width: '7%', paddingRight: '20px', paddingLeft: '20px' }} />
                    <div style={{ width: '90%' }}>
                        <AppTabs />
                    </div>
                </div>
            </div>
        </div>
    );
};
