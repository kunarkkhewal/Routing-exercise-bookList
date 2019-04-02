import React from 'react';
import {Redirect} from 'react-router-dom';

const Logout = props =>{
    if(props.hasLoggedIn){
        return(
            <div>
                {props.toggleLoginStatus()}
                <p>you are at logout screen we believe</p>
                <Redirect to='/login'/>
            </div>
        )
    }
}

export default Logout