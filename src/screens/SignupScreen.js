import React, { useRef, useState } from "react";
import { useMemo } from "react";
import { auth } from "../firebase";
import "./SignupScreen.css";

import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword
} from "firebase/auth";

export default function SignupScreen({ userEmail, setUserEmail }) {
	const [showEmailLabel, setShowEmailLabel] = useState(false);
	const [showPasswordLabel, setShowPasswordLabel] = useState(false);

	const emailRef = useRef(userEmail);
	const passwordRef = useRef(null);

	console.log(showEmailLabel);

	const eventHandlersEmail = useMemo(
		() => ({
			onFocus: () => setShowEmailLabel(true),
			onBlur: () => setShowEmailLabel(false)
		}),
		[]
	);

	const eventHandlersPassword = useMemo(
		() => ({
			onFocus: () => setShowPasswordLabel(true),
			onBlur: () => setShowPasswordLabel(false)
		}),
		[]
	);

	//console.log(emailRef);

	const register = e => {
		e.preventDefault();

		createUserWithEmailAndPassword(
			auth,
			emailRef.current.value,
			passwordRef.current.value
		)
			.then(authUser => {
				console.log(authUser);
			})
			.catch(error => {
				alert(error.message);
			});
	};

	const signIn = e => {
		e.preventDefault();

		signInWithEmailAndPassword(
			auth,
			emailRef.current.value,
			passwordRef.current.value
		)
			.then(authUser => {
				console.log(authUser);
			})
			.catch(error => {
				alert(error.message);
			});
	};

	return (
		<div className="signupScreen">
			<form>
				<h1>Sign In</h1>
				<div className="signupScreen__email">
					{emailRef && (
						<label className="email__label">Email or phone number</label>
					)}

					<input
						ref={emailRef}
						type="email"
						placeholder="Email or phone number"
						value={userEmail}
						onFocus={e => (e.target.placeholder = "")}
						onBlur={e => (e.target.placeholder = "Email or phone number")}
						onChange={event => setUserEmail(event.target.value)}
						{...eventHandlersEmail}
					/>
				</div>
				<div className="signupScreen__password">
					{showPasswordLabel && (
						<label className="password__label">Password</label>
					)}

					<input
						ref={passwordRef}
						type="password"
						placeholder="Password"
						onFocus={e => (e.target.placeholder = "")}
						onBlur={e => (e.target.placeholder = "Password")}
						{...eventHandlersPassword}
					/>
				</div>
				<button type="submit" onClick={signIn}>
					Sign In
				</button>
				<div className="signupScreen__extraButtons">
					<label for="RememberMe" className="container">
						Remember me
						<input
							type="checkbox"
							name="RememberMe"
							id="RememberMe"
							value="Remember"
						/>
						<span class="checkmark"></span>
					</label>

					<h5>Need help?</h5>
				</div>

				<h4>
					<span className="signupScreen__gray">New to Netflix? </span>
					<span className="signupScreen__link" onClick={register}>
						Sign up now.
					</span>
				</h4>
			</form>
			<div className="signupScreen__Captcha">
				<p>
					This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
					<span>Learn more</span>
				</p>
			</div>
		</div>
	);
}
