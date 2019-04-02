import React from 'react'
import Bookdetail from './Bookdetail'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";

const Bookfront = (props) => {
    return (
        <div>
            {console.log("in bookfront", props.data)}
            <h1>{props.data.name}</h1>

            <Route
                path='/book-detail/:id'
                Component={(data) => <Bookdetail data={props.data} />}
            />
        </div>
    )
}

export default Bookfront