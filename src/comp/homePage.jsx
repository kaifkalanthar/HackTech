import React from 'react';
import hero from '../externals/hero.svg';
import { NavLink } from 'react-router-dom';

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
                <button className="btn"><NavLink
                    className='btn-a'
                    to = '/register'>Register</NavLink></button>
            </div>
            <img src={hero} alt="" className='home-img' />
        </div>
    );
}

export default HomePage;