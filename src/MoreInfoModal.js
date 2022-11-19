import React, { useState } from "react";
import "./MoreInfoModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCheck,
	faThumbsDown,
	faThumbsUp,
	faPlus,
	faPlay
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

function MoreInfoModal({ movie, setMovieInfo, setinfoBtnStyles }) {
	const history = useHistory();

	const [isLiked, setLike] = useState(false);
	const [isAdded, updateAdded] = useState(false);

	const handleCloseMovieInfo = () => {
		setMovieInfo(false);
		setinfoBtnStyles("banner__button-moreInfo");
	};

	const addToMyList = () => {
		if (!isAdded) {
			updateAdded(true);
		} else {
			updateAdded(false);
		}
	};

	const handleLikes = () => {
		if (!isLiked) {
			setLike(true);
		} else {
			setLike(false);
		}
	};

	const getMovieYear = y => {
		return new Date(y).getFullYear();
	};

	return (
		<div className="modal__moreInfo" id="MoreInfo">
			<div className="modal__content">
				<header
					className="modal__content--banner"
					style={{
						backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
						backgroundSize: "cover",
						backgroundPosition: "center center"
					}}
				>
					<div
						className="moreInfo__banner-close"
						onClick={() => handleCloseMovieInfo()}
					>
						&times;
					</div>
					<div className="modal__content--InfoMovie">
						<h2 className="moreInfo__banner--title">
							{movie?.title || movie?.name || movie?.original_name}
						</h2>
						<div className="moreInfo__banner--buttons-wrapper">
							<button
								className="moreInfo__banner--button"
								onClick={() => history.push("/watch")}
							>
								<FontAwesomeIcon icon={faPlay} className="play" />
								Play
							</button>
							<div className="checked">
								{!isAdded ? (
									<>
										<span class="tooltiptext">Add to My List</span>
										<FontAwesomeIcon
											className="PlusIcon"
											icon={faPlus}
											onClick={() => addToMyList()}
										/>
									</>
								) : (
									<>
										<span class="tooltiptext remove">Remove from My List</span>
										<FontAwesomeIcon
											className="checkIcon"
											icon={faCheck}
											onClick={() => addToMyList()}
										/>
									</>
								)}
							</div>
							<div className="like">
								{!isLiked ? (
									<FontAwesomeIcon
										className="thumbsUpIcon"
										icon={faThumbsUp}
										onClick={() => handleLikes()}
									/>
								) : (
									<FontAwesomeIcon
										className="thumbsUpIcon"
										icon={faThumbsDown}
										onClick={() => handleLikes()}
									/>
								)}
							</div>
						</div>
					</div>
				</header>
				<div className="moreInfo__banner--fadeBotton" />
				<div className="moreInfo__banner--extraInfo">
					<div className="moreInfo__banner-extraLeft">
						<p className="moreInfo__banner--year">
							<span>96 % for you </span>
							{getMovieYear(movie?.first_air_date)}{" "}
							<span className="ageRange">
								{movie?.genre_ids[0] <= 18 ? movie?.genre_ids[0] : 17}
							</span>
						</p>
						<h3 className="moreInfo__banner--description">{movie?.overview}</h3>
					</div>
					<div className="moreInfo__banner-extraRight">
						<p className="extraRight originalTitle">
							<span>Original Title: </span>
							{movie?.original_name}
						</p>
						<p className="extraRight country">
							<span>Nationality: </span>
							{movie?.origin_country[0]}
						</p>
						<p className="extraRight language">
							<span>Original Language: </span>
							{movie?.original_language}
						</p>
						<p className="extraRight vote">
							<span>Average Vote: </span>
							{movie?.vote_average}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MoreInfoModal;
