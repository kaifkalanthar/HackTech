import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [clicked, setClicked] = useState(false);

    const handleOnClick = () => {
        setClicked(!clicked ? true : !clicked);
    }
    return (
            <div className='navbar'>
                
                    <h3 className='logo'>HACKTECH</h3>
                    {clicked && <ul className="menu-lists">
                            <li className="menu-list"><NavLink to = '/' className="menu-item">HOME</NavLink></li>
                            <li className="menu-list"><NavLink to = '/ps' className="menu-item">PROBLEMS</NavLink></li>
                            <li className="menu-list"><NavLink to = '/' className="menu-item">CONTACT US</NavLink></li>
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