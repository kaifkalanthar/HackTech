import React from 'react';
import '../style/problemstatement.css';
import Button from './common/button';
const ProbStat = () => {

    const data = [
        {
            ps_no: 1,
            title: "Series Forecasting with Neural Networks",
            about: `Build an AI model that can accurately predict
        future trends and patterns in time series data, such as stock prices,
        weather forecasts, or energy consumption`
        },
        {
            ps_no: 2,
            title: "Developing an open-source",
            about: `platform for the creation and management
             of sustainable agricultural supply chains, utilizing
            blockchain technology for increased transparency and traceability.`
        },
        {
            ps_no: 3,
            title: "Encryption and Decryption",
            about: `Build a tool that can encrypt and decrypt 
            sensitive data, such as passwords, credit card numbers, 
            and confidential documents, using strong 
            cryptographic algorithms and key management practices.`
        },
        {
            ps_no: 4,
            title: "Explainable AI for Medical Diagnosis",
            about: `Develop an ML model that can diagnose medical
             conditions based on patient data, while also providing 
             transparent and interpretable explanations of its decisions, 
             to help doctors and patients understand the reasoning behind the diagnosis`
        }
    ]
    return (
        <div className="problem-statement">
            <div className="statement-container">
                <h1 className='ps-header'>PROBLEM STATEMENT</h1>

                {data.map(d => (
                    <div className='ps-container' key={d.ps_no}>
                        <div className="ps-no">
                            <h1 className='ps-no-s'>{d.ps_no}</h1>
                        </div>
                        <div className='ps-content'>
                            <h1 className='ps-title'>{d.title}</h1>
                            <p className="ps-des">{d.about}</p>
                        </div>
                    </div>
                ))}
                <center>
                    <Button />
                </center>

            </div>
        </div>
    );
}

export default ProbStat;