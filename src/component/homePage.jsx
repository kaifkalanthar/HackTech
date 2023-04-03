import React from 'react';
import home from '../externals/home.png';
const HomePage = () => {
    return (
        <>
            <div className="home-page">
                <div className="home-content">
                    <h1 className='home-title'>HACKTECH<br /><span className='home-subtitle'>_1.0</span></h1>

                    <p className='home-description'>Hacktech is an event where participants
                        come together to collaborate on creative and innovative
                        projects over a set period of time, usually 24-48 hours.
                        The goal of a hackathon is to encourage collaboration,
                        problem-solving, and creativity in a fast-paced and intense
                        environment.</p>
                </div>
                <img src={home} alt="" className='home-img' />
            </div>

        </>
    );
}

export default HomePage;