import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';

const NavBar = () => {
    const [clicked, setClicked] = useState(false);

    const handleOnClick = () => {
        setClicked(!clicked ? true : !clicked);
    }
    return (
            <div className='navbar'>
                
                    <h3 className='logo'>HACKTECH</h3>
                    {clicked && <ul className="menu-lists">
                            <li className="menu-list"><a href="/" className="menu-item">HOME</a></li>
                            <li className="menu-list"><a href="/" className="menu-item">PROBLEMS</a></li>
                            <li className="menu-list"><a href="/" className="menu-item">CONTACT US</a></li>
                        </ul>
                    }
                    <i className={!clicked ? 'fa fa-bars' : 'fa fa-times'}
                        onClick={handleOnClick}
                        id="toggle">
                    </i>
                
        </div>
    );
}

export default NavBar;