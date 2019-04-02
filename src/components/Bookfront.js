import React from 'react'
import Bookdetail from './Bookdetail'
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter
} from "react-router-dom";
const Bookfront = props =>{
    return(
        
        <div>
            <h1>{props.data.name}</h1>
          

        
      
        <Route
				
                    path='/book-detail'
                    Component={(data)=><Bookdetail data={data}/>}
					
				/>
     

        </div>
        
    )
}

export default Bookfront