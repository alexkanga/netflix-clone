import React from "react";
import "./AddProfileScreen.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import AddIcon from "../img/Add-transparent.png";
import { useHistory } from "react-router-dom";

function AddProfileScreen() {
	const user = useSelector(selectUser);

	const history = useHistory();

	return (
		<div className="addProfileScreen">
			<div className="addProfileScreen__top">
				<img
					className="addProfileScreen__logo"
					src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
					alt="Netflix logo"
					onClick={() => history.push("/")}
				/>
			</div>
			<div className="addProfileScreen__body">
				<div className="list-profiles">
					<h1>Who is watching now?</h1>
					<div className="choose-profile">
						<div className="content-profile" onClick={() => history.push("/")}>
							<div className="profile-img">
								<img
									src="https://occ-0-5068-299.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229"
									alt=""
								/>
							</div>
							<h3>{user.email}</h3>
						</div>
						<div className="content-profile">
							<div className="profile-img">
								<img
									src="https://occ-0-5068-299.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABVKRigKyd51z_GFfICMK6t7lTZ7CNS2pfccve109FGK7IhzxDd5jAaxtLOgFKHYK-FRWjcWgvI8dDEUV4M8IgxYRyEbOsj0BVViH.png?r=420"
									alt=""
								/>
							</div>
							<h3>Children</h3>
						</div>
						<div className="content-profile">
							<div className="profile-img">
								<img className="add-icon" src={AddIcon} alt="" />
							</div>
							<h3>Add Profile</h3>
						</div>
					</div>
				</div>
				<div className="addProfileScreen__ProfilesAdmin">
					<did className="buttonAdmin">Manage Profiles</did>
				</div>
			</div>
		</div>
	);
}

export default AddProfileScreen;
