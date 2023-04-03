import React from 'react';
import '../style/sponsers.css';
import google from '../externals/google.png';
import ibm from '../externals/ibm.png';
import acc from '../externals/acc.png';

const Sponsers = () => {
    return (
        <div className="sponsers">
            <div className="sponsers-container">
                <h1 className="sponsers-header">OUR SPONSERS</h1>
                <div className="sponsers-list">
                    <img src={google} alt="" className='sponsers-img'/>
                    <img src={ibm} alt=""  className='sponsers-img'/>
                    <img src={acc} alt="" className='sponsers-img'/>
                </div>
            </div>
        </div>
    );
}

export default Sponsers;