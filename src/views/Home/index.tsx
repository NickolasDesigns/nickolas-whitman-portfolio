import React from 'react';
import backgroundVideo from '../../assets/CherryBlossomUnderNightSky2.mp4';

const Home = () => {
    return (
        <div>
            <div style={{ position: 'relative', top: 0, right: 0 }}>
                <video autoPlay loop muted style={{ width: '100%', zIndex: -1 }}>
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
                {/* Home Page Section */}
                {/* <section id="home">
                    <h1>Welcome to My Portfolio</h1>
                    <Typography>
                        My name is Nickolas Whitman and this is my portfolio where I can showcase my Software
                        Development skills.
                    </Typography>
                    <Typography>
                        I am currently developing this page on my free time, so bare with me as I add more content to
                        showcase my skill set.
                    </Typography>
                </section> */}
            </div>
        </div>
    );
};

export default Home;
