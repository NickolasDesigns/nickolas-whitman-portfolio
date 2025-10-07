import React from 'react';
import backgroundVideo from './StarsBackground.mp4';
import './Background.css';

const Background = () => {
    return (
        <div style={{ position: "relative", width: '100%', height: '100vh', overflow: 'hidden' }}>
                <video autoPlay loop muted className="background-video">
                    <source src={backgroundVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
        </div>
    );
};

export default Background;
