import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";
import MoreInfoModal from "./MoreInfoModal";

export default function Banner() {
	const [movie, setMovie] = useState([]);
	const [movieInfo, setMovieInfo] = useState(false);
	const [infoBtnStyles, setinfoBtnStyles] = useState("banner__button-moreInfo");

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginals);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);
			return request;
		}

		fetchData();
	}, []);

	console.log(movie);

	function truncate(string, n) {
		return string?.length > n ? string.substr(0, n - 1) + "..." : string;
	}

	const handleShowMovieInfo = () => {
		setMovieInfo(true);
		setinfoBtnStyles("active");
	};

	return (
		<header
			className="banner"
			style={{
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
				backgroundSize: "cover",
				backgroundPosition: "center center"
			}}
		>
			<div className="banner__content">
				<h1 className="banner__title">
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<h2 className="banner__description">
					{truncate(movie?.overview, 170)}
				</h2>
				<div className="banner__buttons-wrapper">
					<button className="banner__button">
						<span>&#9654;</span>Play
					</button>
					<button
						className={infoBtnStyles}
						onClick={() => handleShowMovieInfo()}
					>
						<span>&#9432;</span>More Information
					</button>
					{movieInfo ? (
						<MoreInfoModal
							movie={movie}
							setMovieInfo={setMovieInfo}
							setinfoBtnStyles={setinfoBtnStyles}
						/>
					) : null}
				</div>
			</div>
			<div className="banner--fadeBotton" />
		</header>
	);
}
