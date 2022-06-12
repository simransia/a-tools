
import React from 'react';
import {useLocation} from 'react-router-dom';


function Navbar() {
    let location=useLocation();

    return (
        <nav className="navbar navbar-expand ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><h3>ATools<span>.</span></h3> </a>
                    <div className='d-flex' >
                        {location.pathname != "/home" ?
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                                <button className='btn text-white start'>Start Free Trial</button>
                            </li>
                            <li className="nav-item">
                                <button className='btn text-white login'>Login</button>
                            </li>
                        </ul>
                          : ""} 
                    </div> 
            </div>

        </nav>
    )
}

export default Navbar