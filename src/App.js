import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import "./App.css";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AddProfileScreen from "./screens/AddProfileScreen";

export default function App() {
	const user = useSelector(selectUser);

	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			if (userAuth) {
				//logged in
				//console.log(userAuth);
				dispatch(
					login({
						uid: userAuth.uid,
						email: userAuth.email
					})
				);
			} else {
				//Logged out
				dispatch(logout());
			}
		});

		return unsubscribe;
	}, [dispatch]);

	return (
		<div className="app">
			<Router>
				{!user ? (
					<LoginScreen />
				) : (
					<Switch>
						<Route path="/create-profile">
							<AddProfileScreen />
						</Route>
						<Route path="/profile">
							<ProfileScreen />
						</Route>
						<Route exact path="/">
							<HomeScreen />
						</Route>
					</Switch>
				)}
			</Router>
		</div>
	);
}
