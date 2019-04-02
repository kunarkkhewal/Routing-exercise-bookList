import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter
} from "react-router-dom";
import Header from './components/header';
import Login from './components/Login';
import Logout from './components/Logout';
import Books from './components/Books';
import Bookdetail from './components/Bookdetail';
import books from './books';

class App extends Component {
	constructor() {
		super();
		this.state = {
			hasLoggedIn: false,
			username: "admin",
			password: "admin",
		}
	}

	handlePassword = (event, item) => {
		event.preventDefault();
		const { username, password } = this.state;

		if (item.username === username && item.password === password) {
			this.setState({
				hasLoggedIn: true
			})
		} else {
			this.setState({
				hasLoggedIn: false
			})
		}
	}

	toggleLoginStatus = () => {
		this.setState({
			hasLoggedIn: !this.state.hasLoggedIn
		})
	}

	render() {
		return (
			<Router>
				<Header hasLoggedIn={this.state.hasLoggedIn} />

				<Route
					exact
					path='/'
					render={() => <div><h1>this is book details showing app click on login to access book details if you have already logged in please click books to chek out books</h1><h2>Thank You for your visit</h2></div>}
				/>

				<Route
					exact
					path="/login"
					component={() => (
						<Login
							handlePassword={this.handlePassword}
							hasLoggedIn={this.state.hasLoggedIn}
						/>
					)}
				/>

				<Route
					path='/logout'
					component={() => (
						<Logout
							toggleLoginStatus={this.toggleLoginStatus}
							hasLoggedIn={this.state.hasLoggedIn}
						/>
					)}
				/>

				<PrivateRoute
					path='/books'
					hasLoggedIn={this.state.hasLoggedIn}
					component={Books}
				/>

				<Route

					path='/book-detail'
					Component={(data) => <Bookdetail data={data} />}

				/>

				<PrivateRoute
					path='/book-detail/:id'
					hasLoggedIn={this.state.hasLoggedIn}
					component={Bookdetail}
				/>

			</Router>
		);
	}
}

export default App;

const PrivateRoute = ({
	component: Component,
	hasLoggedIn,
	...rest
}) => {
	return (
		<Route
			{...rest}
			render={props =>
				hasLoggedIn ? (
					<Component {...props} />
				) : (
						<Redirect
							to={{
								pathname: '/login',
								state: hasLoggedIn
							}}
						/>
					)
			}
		/>
	)
}