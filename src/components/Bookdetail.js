import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
import bookls from '../books'

const Bookdetail = props => {

    let{name, description, isbn, pages}= bookls[props.match.params.id];
    return (
        <div className='bookDetail'>
            {console.log(props)}
            <h1> book detail page</h1>

            <h2>Title:{name}</h2>
            <p>Description{description}</p>
            <p>Pages: {pages}</p>
            <p>ISBN: {isbn}</p>
            
        </div>
    )

}

export default Bookdetail