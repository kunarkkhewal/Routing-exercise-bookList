import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }

    handleChange = event =>{
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    

    render(){

        if(this.props.hasLoggedIn){
            return   <Redirect to="/books"/>
        }

        return(
            <div className='login'>
                <form onSubmit={event => this.props.handlePassword(event,this.state)}>

                    {/* <label htmlFor="username">Username:</label> */}
                    <input 
                        onChange={this.handleChange} 
                        name="username" 
                        value={this.state.username} 
                        type="text"
                        placeholder='Username'
                    />
                    {/* <label htmlFor="password">Password</label> */}
                    <input 
                        onChange={this.handleChange}
                        name="password"
                        value={this.state.password}
                        type="password"
                        placeholder='Password'
                    />
                    <input type="submit"/>
                </form>

                <p>default <b>Username </b>and <b>Password</b> is <b>admin</b></p>
            </div>
        )
    }
}

export default Login