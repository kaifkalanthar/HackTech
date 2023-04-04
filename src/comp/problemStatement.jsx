import React from 'react';
import PsCards from './common/psCard';
import { NavLink } from 'react-router-dom';

const ProbStament = () => {
    const data = [
        {
            ps_no: 1,
            title: "New age women safety app",
            about: `Design and develop a Women safety app that automatically senses 
            the danger to a mobile user and triggers
             an SOS alert with location details based
              on multimodal data from a mobile device
               such as audio, video, image, motion 
               detection etc., given a situation that
                the user is not able to operate the mobile.`
        },
        {
            ps_no: 2,
            title: "Obscenity blocker solution",
            about: `Design and develop a 
            technological solution for identifying and blocking any obscene media (image/video/audio) at the user’s end. The solution should be able to send alerts to the concerned nodal agency in case of the spread of such content. The solution may be in the form of a desktop/mobile application or a web browser plugin.`
        },
        {
            ps_no: 3,
            title: "Advanced fake news detection system",
            about: `Design and develop a technological solution/software tool for Tracking & Tracing Fake News and its origin using official sources as the input filter. The solution should have a mechanism to mitigate the impact of the spread of Fake News by auto-populating the fake news spreaders’ inboxes with the official/authenticated news content.`
        },
        {
            ps_no: 4,
            title: "Phishing Detection Solution",
            about: `Design and develop a technological solution for AI-enabled Phishing Links Detection and Alert System. The solution should be able to identify the source of phishing attacks in web pages, email apps, social media, instant messenger apps, text messages etc. The solution may be in the form of a desktop/mobile application or a web browser plugin.`
        }
    ]
    return (
        <div className="ps">
            <h1 className="ps-header">PROBLEM STATEMENT</h1>
            <div className="ps-table">
                <PsCards data={data}/>
            </div>
            <NavLink className="btn" to = "ps">View</NavLink>
        </div>
    );
}

export default ProbStament;