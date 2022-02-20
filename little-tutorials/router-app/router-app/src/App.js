import React, { Component } from "react";
import NavBar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import WrapperProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<div className="content">
					<Routes>
						<Route
							path="/products/:id"
							element={<WrapperProductDetails />}
						></Route>
						<Route path="/products" element={<Products />}></Route>
						<Route path="/posts/:year/:month" element={<Posts />}></Route>
						<Route path="/admin" element={<Dashboard />}></Route>
						<Route path="/" element={<Home />}></Route>
					</Routes>
				</div>
			</div>
		);
	}
}

export default App;
