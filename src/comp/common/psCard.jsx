import React from 'react';

const PsCards = ({data}) => {
    return ( 
        <React.Fragment>
        {data.map(d => (
            <div className="ps-cards" key={d.ps_no}>
                <h1 className="ps-no">{d.ps_no}</h1>
                <div className='ps-content'>
                    <h1 className='ps-title'>{d.title}</h1>
                    <p className="ps-des">{d.about}</p>
                </div>
            </div>
        ))}
        </React.Fragment>
     );
}
 
export default PsCards;