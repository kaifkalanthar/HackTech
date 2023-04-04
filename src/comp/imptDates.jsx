import React from 'react';
import date from '../externals/date.svg';
import dates from '../externals/dates.svg';
const ImptDate = () => {
    return ( 
        <div className="date">
            <h1 className="date-header">SCHEDULE</h1>
            <img className='date-img' src={date} alt=''/>
            <img className='date-imgs' src={dates} alt=''/>
        </div>
     );
}
 
export default ImptDate;