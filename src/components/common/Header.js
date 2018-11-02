import React, {PropTypes} from 'react';
import {Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/courses" activeClassName="Active">Courses</Link>
            {" | "}
            <Link to="/about" activeClassName="Active">About</Link>
        </nav> 
    );
};

export default Header;