import React from 'react';
import { useAppSelector } from 'src/app/hooks';
import { Typography } from '@mui/material';
import Background from 'src/components/Background';

const Home = () => {
    const { tabName }= useAppSelector((state) => state.tabName);

    return (
        <div style={{ position: 'relative', width: '75%', height: '100%', overflow: "hidden"}}>
            {tabName === "Home" ? <div style={{ position: "fixed", top: 0, left: 0, width: '100%', height: '100vh', zIndex: -1 }}><Background/></div> : <></>}
            <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Home Page Section */}
                <section id="home" style={{ padding: '2rem', color: tabName === "Home" ? 'white' : "black", textAlign: 'center' }}>
                    <h1>About Me</h1>
                    <Typography variant="body1" paragraph>
                        Hey there—I'm <strong>Nickolas Mathew Whitman</strong>, an Automation Engineer with a passion for both <strong>Mechanical</strong> and <strong>Software Engineering</strong>. This site is my personal playground, built from the ground up using React, Redux, and Material UI. It's more than just a portfolio—it's a living canvas where I explore, build, and share the projects that define my journey.
                    </Typography>

                    <Typography variant="body1" paragraph>
                        My story spans continents and disciplines. Born in Texas, raised in Australia, and shaped by the rugged beauty of Montana, I’ve always been drawn to systems—whether on the basketball court or inside a control panel. I started my academic path at Knox College, where I played NCAA Division III Basketball while studying Computer Science. Later, I transferred to the University of Idaho to dive deeper into Mechanical Engineering, graduating in Spring 2023 with a dual degree in <strong>Mechanical Engineering</strong> and <strong>Computer Science</strong>.
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Since then, life has been a whirlwind—in the best way. I met my wife, began building my career, and continued expanding my technical toolkit. From <strong>PLC programming</strong> and <strong>SCADA system design</strong> to full-stack software development, I thrive on solving problems and crafting elegant solutions.
                    </Typography>

                    <Typography variant="body1" paragraph>
                        This website is organized into tabs that reflect my diverse interests and experience:
                        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                            <li><strong>Resume:</strong> A snapshot of my academic and professional background</li>
                            <li><strong>SCADA:</strong> A simulated HMI panel showcasing my engineering knowledge</li>
                            <li><strong>Pong:</strong> A playful React-based game to demonstrate frontend interactivity</li>
                            <li><strong>Projects:</strong> A growing collection of personal and collaborative builds</li>
                        </ul>
                    </Typography>

                    <Typography variant="body1" paragraph>
                        I'm actively developing this site, so expect new features, fresh content, and maybe even a few surprises. Thanks for stopping by—feel free to explore and reach out if something sparks your interest.
                    </Typography>
                </section>
            </div>
        </div>
    );
};

export default Home;
