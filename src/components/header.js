import React from 'react';
import {Link} from 'react-router-dom';

const Header = props => {
    return(
        <div className="header">
            <h1>Olivander's</h1>
            <nav>
                <Link className="link" to="/">  Home  </Link>
                {props.hasLoggedIn ? <Link className="link" to="/logout">  Logout  </Link> : <Link className="link" to="/login">  Login  </Link>} 
            </nav>
        </div>
    )
}

export default Header