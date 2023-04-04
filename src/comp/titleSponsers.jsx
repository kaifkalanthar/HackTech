import React from 'react';
import gdsc from '../externals/gdsc.svg';
import gdg from '../externals/gdg.svg';
const TitleSponser = () => {
    return ( 
        <div className="sponsers">
            <h1 className="sponsers-header">TITLE SPONSERS</h1>
            <div className="sponsers-list">
            <img src = {gdsc} alt='' className='sponsers-img'/>
            <img src = {gdg} alt='' className='sponsers-img'/>
            </div>
        </div>
     );
}
 
export default TitleSponser;