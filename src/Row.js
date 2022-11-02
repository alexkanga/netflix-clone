import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
// Import css files for slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Custom Arrows left for slick-carousel
const CustomPrevArrow = props => {
	const { className, onClick } = props;
	return (
		<div className={className} onClick={onClick}>
			<FontAwesomeIcon icon={faAngleLeft} />
		</div>
	);
};

//Custom Arrows right for slick-carousel
const CustomNextArrow = props => {
	const { className, onClick } = props;
	return (
		<div className={className} onClick={onClick}>
			<FontAwesomeIcon icon={faAngleRight} />
		</div>
	);
};

function Row({ title, fetchUrl, isLargeRow = false }) {
	const [movies, setMovies] = useState([]);

	const base_url = "https://image.tmdb.org/t/p/original/";

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}

		fetchData();
	}, [fetchUrl]);

	//console.log(movies);

	//Configuration for slick-carousel
	const config = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 3,
		prevArrow: <CustomPrevArrow />,
		nextArrow: <CustomNextArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 3,
					infinite: false,
					dots: false
				}
			},
			{
				breakpoint: 811,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
					infinite: false,
					dots: false
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	};

	return (
		<div className="row">
			<h2>{title}</h2>
			<Slider {...config}>
				{movies.map(
					movie =>
						/* Prevent dead links */
						((isLargeRow && movie.poster_path) ||
							(!isLargeRow && movie.backdrop_path)) && (
							<img
								className={`row__poster ${isLargeRow && "row__posterLarge"}`}
								key={movie.id}
								src={`${base_url}${
									isLargeRow ? movie.poster_path : movie.backdrop_path
								}`}
								alt={movie.name}
							/>
						)
				)}
			</Slider>
		</div>
	);
}

export default Row;
