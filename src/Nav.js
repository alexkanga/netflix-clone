import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import pencilIcon from "./img/pencil-icon.png";
import userIcon from "./img/user-icon.png";
import helpIcon from "./img/help1.png";
import "./Nav.css";

export default function Nav() {
	/* Hooks for states */
	const [show, handleShow] = useState(false);
	const [dropdownMenu, setDropdownMenu] = useState(false);
	const [isHoveringProfile, setIsHoveringProfile] = useState(false);
	const [dropdownProfile, setDropdownProfile] = useState(false);

	/* Get current user from Redux */
	const user = useSelector(selectUser);

	/* Navigate to specific route with react-router */
	const history = useHistory();

	/* Turn into black color Navbar background when scroll down*/
	const transitionNavBar = () => {
		window.scrollY > 100 ? handleShow(true) : handleShow(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", transitionNavBar);
		return () => window.removeEventListener("scroll", transitionNavBar);
	}, []);

	/* show and hide dropdown Profile when hover */
	const handleMouseEnter = () => {
		setIsHoveringProfile(true);
	};

	const handleMouseLeave = () => {
		setIsHoveringProfile(false);
	};

	/* Clicking outside of box, you close dropdownProfile */
	const dropdownProfileRef = useRef(null);

	function useOutsideHider(ref) {
		useEffect(() => {
			function handleClickOutside(event) {
				if (ref.current && !ref.current.contains(event.target)) {
					setDropdownProfile(false);
				}
			}

			document.addEventListener("mousedown", handleClickOutside);
			return () => {
				document.removeEventListener("mousedown", handleClickOutside);
			};
		}, [ref]);
	}

	useOutsideHider(dropdownProfileRef);

	return (
		<div className={`nav ${show && "nav__black"}`}>
			<div className="nav__content">
				<img
					onClick={() => history.push("/")}
					className="nav__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
					alt="netflix"
				/>
				<div className="nav__menu">
					<div
						className="menu__dropdown"
						onClick={() => setDropdownMenu(!dropdownMenu)}
					>
						<h4>Explore</h4>
						{dropdownMenu && (
							<div className="menu__dropdown-responsiveMenu">
								<div className="menu__dropdown-content">
									<ul>
										<li onClick={() => history.push("/")}>Home</li>
										<li>TV Shows</li>
										<li>Movies</li>
										<li>Recently Added</li>
										<li>My List</li>
									</ul>
								</div>
							</div>
						)}
					</div>
					<ul className="menu-content">
						<li onClick={() => history.push("/")}>Home</li>
						<li>TV Shows</li>
						<li>Movies</li>
						<li>Recently Added</li>
						<li>My List</li>
					</ul>
				</div>
				<div className="action__buttons">
					<FontAwesomeIcon
						className="magnifying-glass"
						icon={faMagnifyingGlass}
					/>
					<h6 className="kids-link">KIDS</h6>
					<FontAwesomeIcon className="bellIcon" icon={faBell} />
					<div
						className="profile-action"
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
					>
						<img
							className="nav__avatar"
							src="https://occ-0-5068-299.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229"
							alt="avatar logo"
							onClick={() => setDropdownProfile(!dropdownProfile)}
						/>
						<span></span>
						{(dropdownProfile || isHoveringProfile) && (
							<div className="profileDropdown__menu" ref={dropdownProfileRef}>
								<div className="profileDropdown__content">
									<div
										className="profileDropdown__row"
										onClick={() => history.push("/")}
									>
										<div className="profileDropdown__row--wrapperImg">
											<img
												src="https://occ-0-5068-299.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229"
												alt="Profile user"
											/>
										</div>
										<h6>{user.email}</h6>
									</div>
									<div className="profileDropdown__row">
										<div className="profileDropdown__row--wrapperImg">
											<img
												src="https://occ-0-5068-299.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABVKRigKyd51z_GFfICMK6t7lTZ7CNS2pfccve109FGK7IhzxDd5jAaxtLOgFKHYK-FRWjcWgvI8dDEUV4M8IgxYRyEbOsj0BVViH.png?r=420"
												alt="Profile children"
											/>
										</div>
										<h6>Children</h6>
									</div>
									<div
										className="profileDropdown__row"
										onClick={() => history.push("/create-profile")}
									>
										<div className="profileDropdown__row--wrapperImg">
											<img
												className="profileIcon"
												src={pencilIcon}
												alt="Pencil Icon"
											/>
										</div>
										<h6>Manage Profiles</h6>
									</div>
									<div
										className="profileDropdown__row"
										onClick={() => history.push("/profile")}
									>
										<div className="profileDropdown__row--wrapperImg">
											<img
												className="profileIcon"
												src={userIcon}
												alt="User Icon"
											/>
										</div>
										<h6>Account</h6>
									</div>
									<div className="profileDropdown__row">
										<div className="profileDropdown__row--wrapperImg">
											<img
												className="profileIcon"
												src={helpIcon}
												alt="Help Icon"
											/>
										</div>
										<h6>Help Center</h6>
									</div>
									<div
										className="profileDropdown__row--logOut"
										onClick={() => auth.signOut()}
									>
										<h6>Logout of Netflix</h6>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
