import React from 'react';
import hero from '../externals/hero.svg';

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="home-content">
                <h1 className='home-title'>HACKTECH<span className='home-subtitle'>{` 1. 0`}</span></h1>

                <p className='home-description'>Hacktech is an event where participants
                    come together to collaborate on creative and innovative
                    projects over a set period of time.
                    The goal of a hackathon is to encourage collaboration,
                    problem-solving, and creativity in a fast-paced and intense
                    environment.</p>
                <button className="btn"><a
                    className='btn-a'
                    href='https://docs.google.com/forms/d/e/1FAIpQLSfCS3GgMGzyOHKa4jRbQ7zVRTHQsGuV4ruWBdBurVk3vuJGyg/viewform?pli=1&pli=1'>Register</a></button>
            </div>
            <img src={hero} alt="" className='home-img' />
        </div>
    );
}

export default HomePage;