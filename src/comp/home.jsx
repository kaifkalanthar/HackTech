import React from 'react';
import HomePage from './homePage';
import ProbStament from './problemStatement';
import RR from './Rr';
import TitleSponser from './titleSponsers';
import Footer from './common/footer';
import ImptDate from './imptDates';

const Home = () => {
    return ( 
        <React.Fragment>
            <HomePage/>
            <ProbStament/>
            <ImptDate/>
            <RR/>
            <TitleSponser/>
            <Footer/>
        </React.Fragment>
     );
}
 
export default Home;