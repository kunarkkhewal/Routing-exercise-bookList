import React from 'react';
import {Link} from 'react-router-dom';

const Header = props => {
    return(
        <div>
            <h1>Book Page</h1>
            <nav>
                <Link to="/">  Home  </Link>
                {/* <Link to="/books">Books</Link> */}
                {props.hasLoggedIn ? <Link to="/logout">  Logout  </Link> : <Link to="/login">  Login  </Link>} 
            </nav>
        </div>
    )
}

export default Header