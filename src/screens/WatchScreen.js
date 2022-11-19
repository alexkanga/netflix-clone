import React from "react";
import "./WatchScreen.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

export default function WatchScreen() {
	/* Navigate to specific route with react-router */
	const history = useHistory();

	return (
		<div className="watchScreen">
			<div className="watchScreen__back" onClick={() => history.push("/")}>
				<FontAwesomeIcon icon={faArrowLeft} />
				Home
			</div>
			<video
				className="video"
				progress
				controls
				loop
				autoPlay
				muted
				src="https://res.cloudinary.com/drpcjt13x/video/upload/v1668868084/Proyectos/Netflix%20clone/nature_p2i0gl.mp4"
			/>
		</div>
	);
}
