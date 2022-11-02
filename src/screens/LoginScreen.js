import React, { useState } from "react";
import { useMemo } from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";

export default function LoginScreen() {
	const [signIn, setSignIn] = useState(false);
	const [userEmail, setUserEmail] = useState("");
	const [showLabel, setShowLabel] = useState(false);

	const eventHandlers = useMemo(
		() => ({
			onFocus: () => setShowLabel(true),
			onBlur: () => setShowLabel(false)
		}),
		[]
	);

	return (
		<div className="loginScreen">
			<div className="loginScreen__background">
				<img
					className="loginScreen__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
					alt="Netflix logo"
				/>
				<button onClick={() => setSignIn(true)} className="loginScreen__button">
					Sign In
				</button>

				<div className="loginScreen__gradient" />
			</div>

			<div className="loginScreen__body">
				{signIn ? (
					<SignupScreen userEmail={userEmail} setUserEmail={setUserEmail} />
				) : (
					<>
						<h1>Unlimited films, TV programmes and more.</h1>
						<h2>Watch anywhere. Cancel at any time.</h2>
						<h3>
							Ready to watch? Enter your email to create or restart your
							membership.
						</h3>
						<div className="loginScreen__input">
							<form>
								<div className="input___container">
									{showLabel && (
										<label className="input__label">Email address</label>
									)}
									<input
										type="email"
										name="email"
										id=""
										placeholder="Email address"
										onFocus={e => (e.target.placeholder = "")}
										onBlur={e => (e.target.placeholder = "Email address")}
										onChange={event => setUserEmail(event.target.value)}
										{...eventHandlers}
									/>
								</div>
								<div className="button__container">
									<button
										onClick={() => setSignIn(true)}
										className="loginScreen__getStarted"
									>
										Get Started
									</button>
								</div>
							</form>
						</div>
					</>
				)}
			</div>
		</div>
	);
}
