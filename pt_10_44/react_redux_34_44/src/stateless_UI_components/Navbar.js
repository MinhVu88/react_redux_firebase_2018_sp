import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom'; // withRouter is the higher-order component

 const Navbar = props => {
     console.log(props);

    // setTimeout(() => {
    //     props.history.push('/contact');
    // }, 5000);

    return (
        <nav className='nav nav-wrapper red darken-3'>
            <div className='container'>
                <a href='!#' className='brand-logo'>React Redux Demo</a>
                <ul className='right'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
};

export default withRouter(Navbar);