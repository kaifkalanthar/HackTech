import React from 'react';
import '../style/prize.css';


const PrizePage = () => {
    return (
        <div className='prize-cover'>
            <div className="prize-page">
                <h1 className='prize-header'>PRIZES</h1>
                <div className="bars">
                    <div className="bar-2">
                        <div className="prize-content">
                            <h3 className="prize">2</h3>
                            <p className="abt-price"><span className='prize-in-letter'>Second Price</span><br />Cash prize of tbh</p>
                        </div>
                    </div>
                    <div className="bar-1">
                        <div className="prize-content">
                            <h3 className="prize">1</h3>
                            <p className="abt-price"><span className='prize-in-letter'>First Price</span><br />Cash prize of tbh</p>
                        </div>
                    </div>
                    <div className="bar-3">
                        <div className="prize-content">
                            <h3 className="prize">3</h3>
                            <p className="abt-price"><span className='prize-in-letter'>Third Price</span><br />Cash prize of tbh</p>
                        </div>
                    </div>
                </div>
                <div className="cert">
                    <h1 className="cert-header">Certificates</h1>
                    <p className="cert-content">Participation Certificates for all the participants will get a printed-copy of participation certificates. Winners Certificates
                        Winners will get podium wise printed certificate.</p>
                </div>
            </div>
        </div>
    );
}

export default PrizePage;