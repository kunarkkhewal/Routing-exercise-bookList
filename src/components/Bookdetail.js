import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter
} from "react-router-dom";
const Bookdetail = props => {

    
    // const {
    //     name,
    //     isbn,
    //     description,
    //     pages,
    // } = props.data.state;

  

    return (
        <div>
            {console.log(props)}
            <h1> book detail page</h1>
       
            {/* {console.log("in book details")}
            <h1>{name}</h1>
            <p>Title: {name}</p>
            <p>Pages: {pages}</p>
            <br />
            <p>Description: {description}</p> */}
        </div>
    )

}

export default Bookdetail