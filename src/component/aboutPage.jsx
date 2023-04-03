import React from 'react';
import aboutimage from '../externals/about.png';

const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="about-container">
                <img src={aboutimage} className='about-img' alt = "" />
                <div className="about-content">
                    <h1 className='ques'>What is HACKTECH?</h1>
                    <p className='ans'>Hacktech is a hackathon event that
                        provides a platform for students in your college campus
                        to showcase their technical skills, creativity, and innovation.
                        The event is designed to foster collaboration, problem-solving,
                        and idea generation, and to encourage participants to think
                        outside the box. Overall, Hacktech is an exciting and rewarding
                        experience for students who are interested in technology,
                        innovation, and problem-solving. The event provides
                        a platform for students to demonstrate their skills
                        and creativity, and to connect with others who share
                        their interests.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;