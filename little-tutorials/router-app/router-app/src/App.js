import React, { Component } from "react";
import NavBar from "./components/navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<div className="content">
					<Switch>
						<Route path="/products/:id" component={ProductDetails}></Route>
						<Route path="/products" component={Products}></Route>
						<Route path="/posts/:year?/:month?" component={Posts}></Route>
						<Route path="/admin" component={Dashboard}></Route>
						<Redirect from="/messages" to="/posts" />
						<Route path="/not-found" component={NotFound} />
						<Route path="/" exact component={Home}></Route>
						<Redirect to="/not-found" />
					</Switch>
				</div>
			</div>
		);
	}
}

export default App;
